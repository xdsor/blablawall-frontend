import { Component } from '@angular/core';
import {BACKEND_URL} from '../constants';

@Component({
  selector: 'login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  onClickYandex(): void {
    window.location.href = `${BACKEND_URL}/oauth2/authorization/yandex`;
  }
}
