import {Component, inject, OnInit} from '@angular/core';
import {PostListItem} from '../models/PostListItem';
import {PostListItemComponent} from './posts-list-item/post-list-item.component';
import {PostsService} from '../services/posts.service';

@Component({
  selector: 'posts-list',
  imports: [PostListItemComponent],
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.css'
})
export class PostsListComponent implements OnInit {
  private postsService = inject(PostsService);
  posts: PostListItem[] | undefined = undefined;

  ngOnInit(): void {
    this.postsService.getAllPosts().subscribe(response => {
      this.posts = response;
    });
  }
}
