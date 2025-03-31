import {Component, inject, input} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {PostFull} from '../../models/PostFull';
import {PostFullReplyComponent} from "./post-full-reply/post-full-reply.component";
import {PostFullReplyFormComponent} from "../ui/post-full-reply-form/post-full-reply-form.component";
import {ReplyDto} from '../../services/dto/PostDtos';
import {PostsService} from '../../services/posts.service';
import {TechnicalNotificationsService} from '../../../technical-notifications/technical-notifications.service';
import {TechnicalNotificationType} from '../../../technical-notifications/models/TechnicalNotification';

@Component({
  selector: 'post-full-replies-section',
  imports: [
    FormsModule,
    PostFullReplyComponent,
    PostFullReplyFormComponent
  ],
  templateUrl: './post-full-replies-section.component.html',
  styleUrl: './post-full-replies-section.component.css'
})
export class PostFullRepliesSectionComponent {
  private readonly postsService = inject(PostsService);
  private readonly technicalNotificationsService = inject(TechnicalNotificationsService);
  post = input.required<PostFull>()

  submitReply(event: ReplyDto) {
    this.postsService.addNewReply({
      postId: event.postId,
      text: event.text,
      replyTo: event.replyTo,
    });
    this.technicalNotificationsService.fireNotification(
      "Ответ успешно добавлен!",
      TechnicalNotificationType.SUCCESS
    )
  }
}
