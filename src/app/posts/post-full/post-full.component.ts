import {Component, inject, Input} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {PostFullPostSectionComponent} from './post-full-post-section/post-full-post-section.component';
import {PostFullRepliesSectionComponent} from './post-full-replies-section/post-full-replies-section.component';
import {PostFull} from "../models/PostFull";
import {PostsService} from "../services/posts.service";

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
  private readonly postsService = inject(PostsService);
  post: PostFull | undefined = undefined;

  @Input("id")
  set postId(id: string) {
    this.postsService.getPostById(Number.parseInt(id)).subscribe(response => {
      this.post = response;
    })
  }
}
