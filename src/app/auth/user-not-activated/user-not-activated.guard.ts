import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {AuthInfoService} from '../auth-info.service';
import {firstValueFrom} from 'rxjs';

export const userNotActivatedGuard: CanActivateFn = async () => {
  const router = inject(Router)
  try {
    const userInfo = await firstValueFrom(inject(AuthInfoService).getAuthInfo())
    return userInfo != undefined && !userInfo.activated;
  } catch (error) {
    return router.parseUrl('/login');
  }
}
