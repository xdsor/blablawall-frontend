import {Component, inject, OnInit, signal} from '@angular/core';
import {PostListItem} from '../models/PostListItem';
import {PostListItemComponent} from './posts-list-item/post-list-item.component';
import {PostsService} from '../services/posts.service';
import {RouterLink} from '@angular/router';
import {PageInfo} from '../../shared/models/PageInfo';
import {postListItemsWithPageInfoDtoToDomain} from '../models/mappers';
import {LoadingComponent} from '../../shared/ui/loading/loading.component';
import {PaginationComponent} from '../../shared/components/pagination/pagination.component';

@Component({
  selector: 'posts-list',
  imports: [PostListItemComponent, RouterLink, LoadingComponent, PaginationComponent],
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.css'
})
export class PostsListComponent implements OnInit {
  private postsService = inject(PostsService);
  pageInfo: PageInfo | undefined = undefined;
  posts = signal<PostListItem[]>([]);
  loading = signal(true)

  ngOnInit(): void {
    this.loadPosts()
  }

  onPageChange(page: number): void {
    this.loadPosts(page)
  }

  private loadPosts(page: number = 0): void {
    this.postsService.getAllPosts(page).subscribe({
      next: result => {
        const mappedResult = postListItemsWithPageInfoDtoToDomain(result)
        mappedResult.posts.sort((a, b) => {
          return b.postedAt.valueOf() - a.postedAt.valueOf()
        })
        this.pageInfo = mappedResult.pageInfo
        this.posts.set(mappedResult.posts)
        this.loading.set(false);
      },
      error: _ => {
        this.loading.set(false);
      }
    });
  }
}
