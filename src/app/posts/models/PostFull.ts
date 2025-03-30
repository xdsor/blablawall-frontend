import {UserPreview} from '../../shared/models/User';

export interface PostReply {
  id: number;
  author: UserPreview;
  content: string;
  postedAt: Date;
  replies?: PostReply[];
}

export interface PostFull {
  id: number;
  author: UserPreview;
  title: string;
  content: string;
  postedAt: Date;
  likes: number;
  repliesCount: number;
  replies: PostReply[];
}
