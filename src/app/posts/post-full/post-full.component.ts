import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {PostFullPostSectionComponent} from './post-full-post-section/post-full-post-section.component';
import {PostFullRepliesSectionComponent} from './post-full-replies-section/post-full-replies-section.component';

@Component({
  selector: 'app-post-full',
  imports: [
    FormsModule,
    PostFullPostSectionComponent,
    PostFullRepliesSectionComponent
  ],
  templateUrl: './post-full.component.html',
  styleUrl: './post-full.component.css'
})
export class PostFullComponent {

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

}
