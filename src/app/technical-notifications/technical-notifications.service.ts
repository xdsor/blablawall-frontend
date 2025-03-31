import {Injectable, Signal, signal} from '@angular/core';
import {generateNotificationId, TechnicalNotification, TechnicalNotificationType} from './models/TechnicalNotification';

@Injectable({
  providedIn: 'root'
})
export class TechnicalNotificationsService {
  private readonly notifications = signal<TechnicalNotification[]>([]);
  constructor() { }

  getAllNotifications(): Signal<TechnicalNotification[]> {
    return this.notifications.asReadonly()
  }

  fireNotification(text: string, type: TechnicalNotificationType) {
    const newNotification: TechnicalNotification = {
      orderedId: generateNotificationId(),
      infoType: type,
      text: text,
    }
    this.notifications.update((notifications) => {
      notifications.push(newNotification)
      return notifications
    })
  }

  removeNotification(id: number) {
    this.notifications.update((notifications) => {
      return notifications.filter((notification) => notification.orderedId != id)
    })
  }
}
