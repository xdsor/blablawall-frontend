import {PageInfo} from '../../../shared/models/PageInfo';
import {UserPreview} from '../../../shared/models/User';

export interface NewPostDto {
  title: string;
  content: string;
}

export interface CreateNewReplyRequest {
  postId: number;
  text: string;
  replyTo?: number;
}

export interface PostListItemDto {
  id: number;
  author: UserPreview;
  lastReplier?: UserPreview;
  lastReplyDate?: string;
  postedAt: string;
  title: string;
  preview: string;
  likes: number;
  repliesCount: number;
}

export interface PostListItemsWithPageInfoDto {
  _embedded: {
    postPreviewDtoList: PostListItemDto[];
  }
  page: PageInfo
}

export interface PostFullDto {
  id: number;
  author: UserPreview;
  title: string;
  content: string;
  postedAt: string;
  likes: number;
  replies: PostReplyDto[];
}

export interface PostReplyDto {
  id: number;
  author: UserPreview;
  content: string;
  postedAt: string;
  replyTo?: number;
}
