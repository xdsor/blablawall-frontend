import {Component, input, output} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PostFullReplyButtonComponent} from '../post-full-reply-button/post-full-reply-button.component';
import {CreateNewReplyRequest} from '../../../services/dto/PostDtos';

@Component({
  selector: 'post-full-reply-form',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    PostFullReplyButtonComponent
  ],
  templateUrl: './post-full-reply-form.component.html',
  styleUrl: './post-full-reply-form.component.css'
})
export class PostFullReplyFormComponent {
  replyTo = input<number>()
  postId = input.required<number>()
  replyText = '';

  replySubmitted = output<CreateNewReplyRequest>()

  onSubmit() {
    const replyDto = {
      postId: this.postId(),
      text: this.replyText,
      replyTo: this.replyTo()
    }
    this.replySubmitted.emit(replyDto);
    this.replyText = '';
  }
}
