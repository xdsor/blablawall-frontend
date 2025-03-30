import {Component, output} from '@angular/core';

@Component({
  selector: 'post-full-reply-button',
  imports: [],
  templateUrl: './post-full-reply-button.component.html',
  styleUrl: './post-full-reply-button.component.css'
})
export class PostFullReplyButtonComponent {
  onClick = output<MouseEvent>()
}
