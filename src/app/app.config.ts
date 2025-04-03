import {ApplicationConfig, inject, provideAppInitializer, provideZoneChangeDetection} from '@angular/core';
import {provideRouter, withComponentInputBinding} from '@angular/router';

import { routes } from './app.routes';
import {HttpClient, provideHttpClient} from '@angular/common/http';
import {ConfigService} from './config/config.service';
import {AppConfig} from './config/models';
import {firstValueFrom, tap} from 'rxjs';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAppInitializer(() => {
      const configService = inject(ConfigService);
      const httpClient = inject(HttpClient);
      return firstValueFrom(httpClient.get<AppConfig>('/env.json').pipe(
        tap((config: AppConfig) => {configService.setConfig(config);})
      ));
    }),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient()
  ]
};
