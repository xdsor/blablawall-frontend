import {Component, input} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {PostFull} from '../../models/PostFull';
import {PostFullReplyComponent} from "./post-full-reply/post-full-reply.component";
import {PostFullReplyFormComponent} from "../ui/post-full-reply-form/post-full-reply-form.component";

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
  post = input.required<PostFull>()
}
