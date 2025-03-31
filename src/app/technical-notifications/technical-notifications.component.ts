import {Component, inject, OnInit, signal, Signal} from '@angular/core';
import {TechnicalNotification} from './models/TechnicalNotification';
import {TechnicalNotificationsService} from './technical-notifications.service';
import {TechnicalNotificationComponent} from './technical-notification/technical-notification.component';

@Component({
  selector: 'technical-notifications',
  imports: [
    TechnicalNotificationComponent
  ],
  templateUrl: './technical-notifications.component.html',
  styleUrl: './technical-notifications.component.css'
})
export class TechnicalNotificationsComponent implements OnInit {
  private readonly technicalNotificationsService = inject(TechnicalNotificationsService)
  notifications: Signal<TechnicalNotification[]> = signal<TechnicalNotification[]>([]);

  ngOnInit(): void {
    this.notifications = this.technicalNotificationsService.getAllNotifications()
  }

  onNotificationClosed(notification: TechnicalNotification): void {
    this.technicalNotificationsService.removeNotification(notification.orderedId)
  }
}
