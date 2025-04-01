import { Component } from '@angular/core';

@Component({
  selector: 'loading-component',
  imports: [],
  template: `
    <div class="spinner-border m-5" role="status">
      <span class="visually-hidden">Загрузка...</span>
    </div>
  `,
  styles: ``
})
export class LoadingComponent {

}
