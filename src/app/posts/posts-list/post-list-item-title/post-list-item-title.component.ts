import {Component, input} from '@angular/core';
import {PostListItem} from '../../models/PostListItem';
import {DatePipe} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'post-list-item-title',
  imports: [
    DatePipe,
    RouterLink
  ],
  templateUrl: './post-list-item-title.component.html',
  styleUrl: './post-list-item-title.component.css'
})
export class PostListItemTitleComponent {
  post = input.required<PostListItem>()
}
