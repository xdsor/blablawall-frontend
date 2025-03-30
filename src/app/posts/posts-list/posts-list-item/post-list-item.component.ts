import { Component, input } from '@angular/core';
import {NgIf} from '@angular/common';
import {PostListItem} from '../../models/PostListItem';
import {PostListItemTitleComponent} from './post-list-item-title/post-list-item-title.component';
import {PostListItemActivityInfoComponent} from './post-list-item-activity-info/post-list-item-activity-info.component';
import {
  PostListItemLastReplyInfoComponent
} from './post-list-item-last-reply-info/post-list-item-last-reply-info.component';

@Component({
  selector: 'posts-list-item',
  imports: [
    NgIf,
    PostListItemTitleComponent,
    PostListItemActivityInfoComponent,
    PostListItemLastReplyInfoComponent
  ],
  templateUrl: './post-list-item.component.html',
  styleUrl: './post-list-item.component.css'
})
export class PostListItemComponent {
  post = input.required<PostListItem>()
}
