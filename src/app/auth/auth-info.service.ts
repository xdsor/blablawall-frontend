import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserSelfInfo} from '../shared/models/User';
import {BACKEND_URL} from '../constants';
import {Observable, tap} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInfoService {
  httpClient = inject(HttpClient);
  userSelfInfo: UserSelfInfo | undefined = undefined;
  constructor() { }

  getAuthInfo(): Observable<UserSelfInfo> {
    return this.httpClient.get<UserSelfInfo>(`${BACKEND_URL}/api/users/self-info`).pipe(
      tap((userSelfInfo: UserSelfInfo) => { this.userSelfInfo = userSelfInfo })
    )
  }
}
