import {Component, input} from '@angular/core';
import {PostFull} from '../../models/PostFull';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'post-full-post-section',
  imports: [
    DatePipe
  ],
  templateUrl: './post-full-post-section.component.html',
  styleUrl: './post-full-post-section.component.css'
})
export class PostFullPostSectionComponent {
  post = input.required<PostFull>()
}
