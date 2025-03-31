import { Routes } from '@angular/router';
import {PostsListComponent} from './posts/posts-list/posts-list.component';
import {PostFullComponent} from './posts/post-full/post-full.component';
import {LayoutComponent} from './layout/layout.component';
import {NewPostComponent} from './posts/new-post/new-post.component';

export const routes: Routes = [
  {path: '', component: LayoutComponent, children: [
      { path: '', redirectTo: 'posts', pathMatch: 'full' },
      { path: 'posts', component: PostsListComponent },
      { path: 'posts/new', component: NewPostComponent },
      { path: 'posts/:id', component: PostFullComponent }
    ]
  },
];
