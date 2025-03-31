import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NewPostDto} from '../services/dto/PostDtos';
import {Router} from '@angular/router';
import {PostsService} from '../services/posts.service';
import {TechnicalNotificationsService} from '../../technical-notifications/technical-notifications.service';
import {TechnicalNotificationType} from '../../technical-notifications/models/TechnicalNotification';

@Component({
  selector: 'app-new-post',
  imports: [
    FormsModule
  ],
  templateUrl: './new-post.component.html',
  styleUrl: './new-post.component.css'
})
export class NewPostComponent {
  private readonly router = inject(Router)
  private readonly postsService = inject(PostsService);
  private readonly techicalNotificationsService = inject(TechnicalNotificationsService);

  model: NewPostDto = {
    title: '',
    content: ''
  }

  addNewPost(): void {
    this.postsService.addNewPost(this.model)
    this.techicalNotificationsService.fireNotification(
      `Пост ${this.model.title} успешно добавлен`,
      TechnicalNotificationType.SUCCESS
    )
    this.router.navigate(['/'])
  }

}
