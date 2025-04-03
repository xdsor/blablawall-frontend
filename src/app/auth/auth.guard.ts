import {CanActivateChildFn, Router} from '@angular/router';
import {AuthInfoService} from './auth-info.service';
import {inject} from '@angular/core';
import {firstValueFrom} from 'rxjs';

export const authGuard: CanActivateChildFn = async () => {
  const router = inject(Router)
  try {
    return (await firstValueFrom(inject(AuthInfoService).getAuthInfo())).activated
      ? true
      : router.parseUrl("/user-not-activated");
  } catch(err) {
    return router.parseUrl('/login');
  }
};
