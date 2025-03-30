import { Injectable } from '@angular/core';
import {PostListItem} from '../models/PostListItem';
import {Observable} from 'rxjs';
import {PostFull} from '../models/PostFull';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor() { }

  posts: PostListItem[] = [
    {
      id: 1,
      author: {
        nickname: "NightWolf",
        avatarUrl: "https://avatar.iran.liara.run/public/boy"
      },
      lastReplier: {
        nickname: "MoonChild",
        avatarUrl: "https://avatar.iran.liara.run/public/girl"
      },
      lastReplyDate: new Date("2025-03-27T12:34:00"),
      postedAt: new Date("2025-03-25T09:00:00"),
      title: "Исследование глубин океана",
      preview: "Увлекательное путешествие в неизведанные уголки глубинного моря...",
      likes: 128,
      repliesCount: 54
    },
    {
      id: 2,
      author: {
        nickname: "CodeGuru",
        avatarUrl: "https://avatar.iran.liara.run/public/boy"
      },
      lastReplier: {
        nickname: "PixelMaster",
        avatarUrl: "https://avatar.iran.liara.run/public/boy"
      },
      lastReplyDate: new Date("2025-03-26T15:20:00"),
      postedAt: new Date("2025-03-24T18:45:00"),
      title: "Будущее искусственного интеллекта",
      preview: "На что будет способен ИИ в ближайшем десятилетии? Давайте узнаем.",
      likes: 203,
      repliesCount: 92
    },
    {
      id: 3,
      author: {
        nickname: "TravelerX",
        avatarUrl: "https://avatar.iran.liara.run/public/boy"
      },
      postedAt: new Date("2025-03-22T10:15:00"),
      title: "Горы Кыргызстана: Скрытое сокровище",
      preview: "Откройте для себя захватывающую красоту горных массивов Кыргызстана.",
      likes: 97,
      repliesCount: 0
    },
    {
      id: 4,
      author: {
        nickname: "MusicMaven",
        avatarUrl: "https://avatar.iran.liara.run/public/girl"
      },
      lastReplier: {
        nickname: "BeatMaker",
        avatarUrl: "https://avatar.iran.liara.run/public/boy"
      },
      lastReplyDate: new Date("2025-03-26T11:30:00"),
      postedAt: new Date("2025-03-22T09:45:00"),
      title: "Эволюция хип-хопа",
      preview: "Глубокий анализ того, как культура хип-хопа эволюционировала на протяжении десятилетий.",
      likes: 145,
      repliesCount: 32
    },
    {
      id: 5,
      author: {
        nickname: "ArtMaster",
        avatarUrl: "https://avatar.iran.liara.run/public/girl"
      },
      postedAt: new Date("2025-03-20T14:00:00"),
      title: "Советы и трюки по цифровому искусству",
      preview: "Всё, что вам нужно знать, чтобы начать создавать потрясающее цифровое искусство.",
      likes: 178,
      repliesCount: 0
    }
  ];

  post = {
    id: 1,
    author: {
      nickname: "CodeMaster",
      avatarUrl: "https://avatar.iran.liara.run/public/boy"
    },
    title: "Почему JavaScript такой популярный?",
    content: "JavaScript — это один из самых популярных языков программирования в мире. Давайте обсудим, почему это так.",
    postedAt: new Date("2025-03-28T09:30:00"),
    likes: 250,
    repliesCount: 4,
    replies: [
      {
        id: 1,
        author: {
          nickname: "FrontendDev",
          avatarUrl: "https://avatar.iran.liara.run/public/girl"
        },
        content: "Потому что JavaScript является единственным языком, который работает в браузере!",
        postedAt: new Date("2025-03-28T10:00:00"),
        replies: [
          {
            id: 2,
            author: {
              nickname: "NodeGuru",
              avatarUrl: "https://avatar.iran.liara.run/public/boy"
            },
            content: "Именно! Но сейчас с Node.js JavaScript стал универсальным инструментом.",
            postedAt: new Date("2025-03-28T10:15:00"),
            replies: []
          }
        ]
      },
      {
        id: 3,
        author: {
          nickname: "CSSWizard",
          avatarUrl: "https://avatar.iran.liara.run/public/girl"
        },
        content: "JavaScript позволяет легко добавлять интерактивность к веб-страницам.",
        postedAt: new Date("2025-03-28T11:00:00"),
        replies: []
      },
      {
        id: 4,
        author: {
          nickname: "TypeScriptFan",
          avatarUrl: "https://avatar.iran.liara.run/public/boy"
        },
        content: "С TypeScript JavaScript стал более предсказуемым и удобным для крупных проектов.",
        postedAt: new Date("2025-03-28T11:30:00"),
        replies: [
          {
            id: 5,
            author: {
              nickname: "JavaLover",
              avatarUrl: "https://avatar.iran.liara.run/public/boy"
            },
            content: "Согласен! Статическая типизация действительно помогает избежать многих ошибок.",
            postedAt: new Date("2025-03-28T12:00:00"),
            replies: []
          },
          {
            id: 6,
            author: {
              nickname: "RustAce",
              avatarUrl: "https://avatar.iran.liara.run/public/boy"
            },
            content: "Но всё равно TypeScript не дотягивает до настоящей типизации Rust или Java.",
            postedAt: new Date("2025-03-28T12:15:00"),
            replies: []
          }
        ]
      }
    ]
  };

  getAllPosts(): Observable<PostListItem[]> {
    return new Observable<PostListItem[]>(observer => {
      observer.next(this.posts)
      observer.complete()
    })
  }

  getPostById(id: number): Observable<PostFull> {
    return new Observable<PostFull>(observer => {
      observer.next(this.post)
      observer.complete()
    })
  }
}
