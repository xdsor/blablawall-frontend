import {Component, inject, Input, signal, WritableSignal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {PostFullPostSectionComponent} from './post-full-post-section/post-full-post-section.component';
import {PostFullRepliesSectionComponent} from './post-full-replies-section/post-full-replies-section.component';
import {PostFull, PostReply} from "../models/PostFull";
import {PostsService} from "../services/posts.service";
import {TechnicalNotificationsService} from '../../technical-notifications/technical-notifications.service';
import {TechnicalNotificationType} from '../../technical-notifications/models/TechnicalNotification';
import {CreateNewReplyRequest, PostFullDto} from '../services/dto/PostDtos';
import {mapPostFullDtoToPostFull} from '../models/mappers';
import {LoadingComponent} from '../../shared/ui/loading/loading.component';

@Component({
  selector: 'app-post-full',
  imports: [
    FormsModule,
    PostFullPostSectionComponent,
    PostFullRepliesSectionComponent,
    LoadingComponent
  ],
  templateUrl: './post-full.component.html',
  styleUrl: './post-full.component.css'
})
export class PostFullComponent {
  private readonly postsService = inject(PostsService);
  private readonly technicalNotificationsService = inject(TechnicalNotificationsService);
  post: WritableSignal<PostFull | undefined> = signal(undefined);
  loading = signal(true);

  @Input("id")
  set postId(id: string) {
    this.postsService.getPostById(Number.parseInt(id)).subscribe({
      next: response => {
        this.processPostResponse(response);
      },
      error: _ => {
        this.technicalNotificationsService.fireNotification(
          "Не удалось загрузить пост :(",
          TechnicalNotificationType.ERROR
        )
        this.loading.set(false)
      }
    })
  }

  submitReply(event: CreateNewReplyRequest) {
    this.loading.set(true);
    this.postsService.addNewReply(this.post()!!.id, event).subscribe({
      next: (response: PostFullDto) => {
        this.technicalNotificationsService.fireNotification(
          "Ответ успешно добавлен!",
          TechnicalNotificationType.SUCCESS
        )
        this.processPostResponse(response);
      },
      error: (_) => {
        this.technicalNotificationsService.fireNotification(
          "Не удалось добавить ответ",
          TechnicalNotificationType.ERROR
        )
      }
    })
  }

  private processPostResponse(postDto: PostFullDto) {
    const postFull = mapPostFullDtoToPostFull(postDto);
    postFull.replies.sort(compareFn);
    postFull.replies.forEach(reply => {
      if (reply.replies != undefined) {
        reply.replies.sort(compareFn);
      }
    })
    this.post.set(postFull);
    this.loading.set(false)
  }
}

const compareFn = (a: PostReply, b: PostReply) => b.postedAt.valueOf() - a.postedAt.valueOf();
