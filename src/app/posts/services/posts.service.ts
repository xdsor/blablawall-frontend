import {inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {
  NewPostDto,
  PostFullDto,
  PostListItemsWithPageInfoDto,
  CreateNewReplyRequest
} from './dto/PostDtos';
import {HttpClient} from '@angular/common/http';
import {ConfigService} from '../../config/config.service';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(private http: HttpClient) { }
  appConfig = inject(ConfigService);

  getAllPosts(): Observable<PostListItemsWithPageInfoDto> {
    return this.http.get<PostListItemsWithPageInfoDto>(`${this.appConfig.getConfig().backendUrl}/api/posts`)
  }

  getPostById(id: number): Observable<PostFullDto> {
    return this.http.get<PostFullDto>(`${this.appConfig.getConfig().backendUrl}/api/posts/${id}`)
  }

  addNewPost(post: NewPostDto): Observable<PostFullDto> {
    return this.http.post<PostFullDto>(`${this.appConfig.getConfig().backendUrl}/api/posts`, post)
  }

  addNewReply(postId: number, reply: CreateNewReplyRequest): Observable<PostFullDto> {
    return this.http.post<PostFullDto>(`${this.appConfig.getConfig().backendUrl}/api/posts/${postId}/reply`, reply)
  }
}
