import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {
  NewPostDto,
  PostFullDto,
  PostListItemsWithPageInfoDto,
  CreateNewReplyRequest
} from './dto/PostDtos';
import {HttpClient} from '@angular/common/http';
import {BACKEND_URL} from '../../constants';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  getAllPosts(): Observable<PostListItemsWithPageInfoDto> {
    return this.http.get<PostListItemsWithPageInfoDto>(`${BACKEND_URL}/posts`)
  }

  getPostById(id: number): Observable<PostFullDto> {
    return this.http.get<PostFullDto>(`${BACKEND_URL}/posts/${id}`)
  }

  addNewPost(post: NewPostDto): Observable<PostFullDto> {
    return this.http.post<PostFullDto>(`${BACKEND_URL}/posts`, post)
  }

  addNewReply(postId: number, reply: CreateNewReplyRequest): Observable<PostFullDto> {
    return this.http.post<PostFullDto>(`${BACKEND_URL}/posts/${postId}/reply`, reply)
  }
}
