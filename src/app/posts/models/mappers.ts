import {PostFullDto, PostListItemsWithPageInfoDto, PostReplyDto} from '../services/dto/PostDtos';
import {PostListItem, PostListItemsWithPageInfo} from './PostListItem';
import {PostFull, PostReply} from './PostFull';

export function postListItemsWithPageInfoDtoToDomain(p: PostListItemsWithPageInfoDto): PostListItemsWithPageInfo {
  return {
    posts: p._embedded == undefined ? [] : p._embedded.postPreviewDtoList.map((listItem): PostListItem => {
    return {
      id: listItem.id,
      author: listItem.author,
      lastReplier: listItem.lastReplier,
      lastReplyDate: listItem.lastReplyDate == undefined ? undefined : new Date(listItem.lastReplyDate),
      postedAt: new Date(listItem.postedAt),
      title: listItem.title,
      preview: listItem.preview,
      likes: listItem.likes,
      repliesCount: listItem.repliesCount
    }
  }),
    pageInfo: p.page
  }
}

export function mapPostFullDtoToPostFull(post: PostFullDto): PostFull {
  const postFull: PostFull = {
    id: post.id,
    author: post.author,
    title: post.title,
    content: post.content,
    postedAt: new Date(post.postedAt),
    likes: post.likes,
    repliesCount: post.replies.length,
    replies: []
  }
  // Ответы могут собираться в деревья неизвестной глубины. Чтобы красиво отрисовать это на UI,
  // нам нужно ограничить вложенность двумя уровнями: корень (основной ответ) и вложенные ответы.
  // Нам понадобится мапа replyId -> reply для обхода дерева
  const replyIdToReplyMap = new Map<number, PostReplyDto>();
  post.replies.forEach(reply => {
    replyIdToReplyMap.set(reply.id, reply);
  })
  // Соберем мапу корень -> вложенные ответы
  const replyIdToInnerRepliesMap = new Map<number, PostReplyDto[]>()
  post.replies.forEach(reply => {
    if (reply.replyTo != undefined) {
      let rootReplyId = reply.replyTo;
      let nextReplyId: number | undefined = undefined;
      do {
        nextReplyId = replyIdToReplyMap.get(rootReplyId)!!.replyTo
        if (nextReplyId != undefined) {
          rootReplyId = nextReplyId;
        }
      } while (nextReplyId != undefined)

      const savedReplies = replyIdToInnerRepliesMap.get(rootReplyId);
      if (savedReplies == undefined) {
        replyIdToInnerRepliesMap.set(rootReplyId, [reply])
      } else {
        savedReplies.push(reply)
      }
    }
  })

  for (const reply of post.replies) {
    if (reply.replyTo != undefined) {
      continue;
    } else {
      const innerReplies = replyIdToInnerRepliesMap.get(reply.id);
      postFull.replies.push(mapReplyDtoToReply(reply, innerReplies));
    }
  }
  return postFull
}

export function mapReplyDtoToReply(replyDto: PostReplyDto, innerReplies?: PostReplyDto[]): PostReply {
  return {
    id: replyDto.id,
    author: replyDto.author,
    content: replyDto.content,
    postedAt: new Date(replyDto.postedAt),
    replies: innerReplies == undefined ?
      undefined :
      innerReplies.map(innerReply => mapReplyDtoToReply(innerReply, undefined))
  }
}
