import {Component, inject} from '@angular/core';
import {ConfigService} from '../../config/config.service';

@Component({
  selector: 'login-component',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  appConfig = inject(ConfigService);
  onClickYandex(): void {
    window.location.href = `${this.appConfig.getConfig().backendUrl}/oauth2/authorization/yandex`;
  }
}
