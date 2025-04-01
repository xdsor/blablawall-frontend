import {UserPreview} from '../../shared/models/User';
import {PageInfo} from '../../shared/models/PageInfo';

export interface PostListItemsWithPageInfo {
  pageInfo: PageInfo;
  posts: PostListItem[];
}

export interface PostListItem {
  id: number;
  author: UserPreview;
  lastReplier?: UserPreview;
  lastReplyDate?: Date;
  postedAt: Date;
  title: string;
  preview: string;
  likes: number;
  repliesCount: number;
}
