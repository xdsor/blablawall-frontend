export interface NewPostDto {
  title: string;
  content: string;
}

export interface ReplyDto {
  postId: number;
  text: string;
  replyTo?: number;
}
