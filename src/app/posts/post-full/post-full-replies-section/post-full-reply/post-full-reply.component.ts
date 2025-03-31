import {Component, input, output} from '@angular/core';
import {DatePipe, NgIf} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PostReply} from '../../../models/PostFull';
import {PostFullReplyFormComponent} from '../../ui/post-full-reply-form/post-full-reply-form.component';
import {PostFullReplyButtonComponent} from '../../ui/post-full-reply-button/post-full-reply-button.component';
import {ReplyDto} from '../../../services/dto/PostDtos';

@Component({
  selector: 'post-full-reply',
  imports: [
    DatePipe,
    FormsModule,
    NgIf,
    ReactiveFormsModule,
    PostFullReplyFormComponent,
    PostFullReplyButtonComponent
  ],
  templateUrl: './post-full-reply.component.html',
  styleUrl: './post-full-reply.component.css'
})
export class PostFullReplyComponent {
  postId = input.required<number>();
  reply = input.required<PostReply>()
  replySubmitted = output<ReplyDto>()
  showReplyForm = false

  onSubmitReply(event: ReplyDto) {
    this.replySubmitted.emit(event);
  }
}
