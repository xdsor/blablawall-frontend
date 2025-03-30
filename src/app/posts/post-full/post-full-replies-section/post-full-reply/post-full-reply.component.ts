import {Component, input} from '@angular/core';
import {DatePipe, NgIf, NgTemplateOutlet} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PostReply} from '../../../models/PostFull';
import {PostFullReplyFormComponent} from '../../ui/post-full-reply-form/post-full-reply-form.component';
import {PostFullReplyButtonComponent} from '../../ui/post-full-reply-button/post-full-reply-button.component';

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
  reply = input.required<PostReply>()
  showReplyForm = false
}
