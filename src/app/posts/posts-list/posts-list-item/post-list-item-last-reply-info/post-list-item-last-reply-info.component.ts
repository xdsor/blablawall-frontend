import {Component, input} from '@angular/core';
import {PostListItem} from '../../../models/PostListItem';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'post-list-item-last-reply-info',
  imports: [
    DatePipe
  ],
  templateUrl: './post-list-item-last-reply-info.component.html',
  styleUrl: './post-list-item-last-reply-info.component.css'
})
export class PostListItemLastReplyInfoComponent {
  post = input.required<PostListItem>()
}
