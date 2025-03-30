import { Component } from '@angular/core';
import {PostListItem} from '../models/PostListItem';
import {PostListItemComponent} from './posts-list-item/post-list-item.component';

@Component({
  selector: 'posts-list',
  imports: [PostListItemComponent],
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.css'
})
export class PostsListComponent {
  posts: PostListItem[] = [
    {
      id: 1,
      author: {
        nickname: "NightWolf",
        avatarUrl: "https://avatar.iran.liara.run/public/boy"
      },
      lastReplyer: {
        nickname: "MoonChild",
        avatarUrl: "https://avatar.iran.liara.run/public/girl"
      },
      lastReplyDate: new Date("2025-03-27T12:34:00"),
      postedAt: new Date("2025-03-25T09:00:00"),
      title: "Исследование глубин океана",
      preview: "Увлекательное путешествие в неизведанные уголки глубинного моря...",
      likes: 128,
      replysCount: 54
    },
    {
      id: 2,
      author: {
        nickname: "CodeGuru",
        avatarUrl: "https://avatar.iran.liara.run/public/boy"
      },
      lastReplyer: {
        nickname: "PixelMaster",
        avatarUrl: "https://avatar.iran.liara.run/public/boy"
      },
      lastReplyDate: new Date("2025-03-26T15:20:00"),
      postedAt: new Date("2025-03-24T18:45:00"),
      title: "Будущее искусственного интеллекта",
      preview: "На что будет способен ИИ в ближайшем десятилетии? Давайте узнаем.",
      likes: 203,
      replysCount: 92
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
      replysCount: 0
    },
    {
      id: 4,
      author: {
        nickname: "MusicMaven",
        avatarUrl: "https://avatar.iran.liara.run/public/girl"
      },
      lastReplyer: {
        nickname: "BeatMaker",
        avatarUrl: "https://avatar.iran.liara.run/public/boy"
      },
      lastReplyDate: new Date("2025-03-26T11:30:00"),
      postedAt: new Date("2025-03-22T09:45:00"),
      title: "Эволюция хип-хопа",
      preview: "Глубокий анализ того, как культура хип-хопа эволюционировала на протяжении десятилетий.",
      likes: 145,
      replysCount: 32
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
      replysCount: 0
    }
  ];

}
