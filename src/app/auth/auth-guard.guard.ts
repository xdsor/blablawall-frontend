import {CanActivateChildFn, Router} from '@angular/router';
import {AuthInfoService} from './auth-info.service';
import {inject} from '@angular/core';
import {firstValueFrom} from 'rxjs';

export const authGuardGuard: CanActivateChildFn = async () => {
  const router = inject(Router)
  try {
    return (await firstValueFrom(inject(AuthInfoService).getAuthInfo())).activated
  } catch(err) {
    return router.parseUrl('/login');
  }
};
