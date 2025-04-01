import {Component, inject, signal} from '@angular/core';
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
  private readonly technicalNotificationsService = inject(TechnicalNotificationsService);

  loading = signal(false)

  model: NewPostDto = {
    title: '',
    content: ''
  }

  addNewPost(): void {
    this.loading.set(true)
    this.postsService.addNewPost(this.model).subscribe({
      next: _ => {
        this.technicalNotificationsService.fireNotification(
          `Пост ${this.model.title} успешно добавлен`,
          TechnicalNotificationType.SUCCESS
        )
        this.router.navigate(['/'])
      },
      error: _ => {
        this.technicalNotificationsService.fireNotification(
          `Не удалось добавить пост :(`,
          TechnicalNotificationType.ERROR
        )
        this.loading.set(false)
      }
    })
  }

}
