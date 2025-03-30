import {UserPreview} from '../../shared/models/User';

export interface PostListItem {
  id: number;
  author: UserPreview;
  lastReplyer?: UserPreview;  // null если нет комментариев
  lastReplyDate?: Date; // null если нет комментариев
  postedAt: Date;
  title: string;
  preview: string;
  likes: number;
  replysCount: number;
}
