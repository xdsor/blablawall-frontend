import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserSelfInfo} from '../shared/models/User';
import {Observable, tap} from 'rxjs';
import {ConfigService} from '../config/config.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInfoService {
  httpClient = inject(HttpClient);
  appConfig = inject(ConfigService)
  userSelfInfo: UserSelfInfo | undefined = undefined;
  constructor() { }

  getAuthInfo(): Observable<UserSelfInfo> {
    return this.httpClient.get<UserSelfInfo>(`${this.appConfig.getConfig().backendUrl}/api/users/self-info`).pipe(
      tap((userSelfInfo: UserSelfInfo) => { this.userSelfInfo = userSelfInfo })
    )
  }
}
