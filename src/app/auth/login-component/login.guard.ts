import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {AuthInfoService} from '../auth-info.service';
import {firstValueFrom} from 'rxjs';

export const loginGuard: CanActivateFn = async () => {
  const router = inject(Router)
  try {
    return (await firstValueFrom(inject(AuthInfoService).getAuthInfo())).activated
      ? false
      : router.parseUrl('/user-not-activated');
  } catch (error) {
    return true;
  }
};
