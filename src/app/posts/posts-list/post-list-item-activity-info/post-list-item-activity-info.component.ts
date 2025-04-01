import {Component, input} from '@angular/core';
import {PostListItem} from '../../models/PostListItem';

@Component({
  selector: 'app-post-list-item-activity-info',
  imports: [],
  templateUrl: './post-list-item-activity-info.component.html',
  styleUrl: './post-list-item-activity-info.component.css'
})
export class PostListItemActivityInfoComponent {
  post = input.required<PostListItem>()
}
