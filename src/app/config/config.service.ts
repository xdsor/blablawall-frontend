import {Injectable} from '@angular/core';
import {AppConfig} from './models';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private configData!: AppConfig
  constructor() {}
  getConfig(): AppConfig {
    return this.configData;
  }

  setConfig(config: AppConfig) {
    this.configData = config;
  }
}
