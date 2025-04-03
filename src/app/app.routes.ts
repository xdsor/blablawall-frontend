import { Routes } from '@angular/router';
import {PostsListComponent} from './posts/posts-list/posts-list.component';
import {PostFullComponent} from './posts/post-full/post-full.component';
import {LayoutComponent} from './layout/layout.component';
import {NewPostComponent} from './posts/new-post/new-post.component';
import {LoginComponent} from './auth/login-component/login.component';
import {authGuard} from './auth/auth.guard';
import {UserNotActivatedComponent} from './auth/user-not-activated/user-not-activated.component';
import {loginGuard} from './auth/login-component/login.guard';
import {userNotActivatedGuard} from './auth/user-not-activated/user-not-activated.guard';

export const routes: Routes = [
  {path: '', component: LayoutComponent, canActivateChild: [authGuard], children: [
      { path: '', redirectTo: 'posts', pathMatch: 'full' },
      { path: 'posts', component: PostsListComponent },
      { path: 'posts/new', component: NewPostComponent },
      { path: 'posts/:id', component: PostFullComponent }
    ]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [loginGuard]
  },
  {
    path: 'user-not-activated',
    component: UserNotActivatedComponent,
    canActivate: [userNotActivatedGuard]
  },
];
