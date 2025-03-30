import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PostFullReplyButtonComponent} from '../post-full-reply-button/post-full-reply-button.component';

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

}
