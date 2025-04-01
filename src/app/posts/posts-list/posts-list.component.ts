import {Component, inject, OnInit, signal} from '@angular/core';
import {PostListItem} from '../models/PostListItem';
import {PostListItemComponent} from './posts-list-item/post-list-item.component';
import {PostsService} from '../services/posts.service';
import {RouterLink} from '@angular/router';
import {PageInfo} from '../../shared/models/PageInfo';
import {postListItemsWithPageInfoDtoToDomain} from '../models/mappers';
import {LoadingComponent} from '../../shared/ui/loading/loading.component';

@Component({
  selector: 'posts-list',
  imports: [PostListItemComponent, RouterLink, LoadingComponent],
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.css'
})
export class PostsListComponent implements OnInit {
  private postsService = inject(PostsService);
  pageInfo: PageInfo | undefined = undefined;
  posts: PostListItem[] | undefined = undefined;
  loading = signal(true)

  ngOnInit(): void {
    this.postsService.getAllPosts().subscribe({
      next: result => {
        const mappedResult = postListItemsWithPageInfoDtoToDomain(result)
        mappedResult.posts.sort((a, b) => {
          return b.postedAt.valueOf() - a.postedAt.valueOf()
        })
        this.pageInfo = mappedResult.pageInfo
        this.posts = mappedResult.posts
        this.loading.set(false);
      },
      error: _ => {
        this.loading.set(false);
      }
    });
  }
}
