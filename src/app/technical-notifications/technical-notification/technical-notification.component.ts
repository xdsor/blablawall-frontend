import {Component, input, output} from '@angular/core';
import {TechnicalNotification, TechnicalNotificationType} from '../models/TechnicalNotification';
import {NgClass} from '@angular/common';

@Component({
  selector: 'technical-notification',
  imports: [
    NgClass
  ],
  templateUrl: './technical-notification.component.html',
  styleUrl: './technical-notification.component.css'
})
export class TechnicalNotificationComponent {
  notification = input.required<TechnicalNotification>();
  notificationClosed = output<TechnicalNotification>();

  onClose() {
    this.notificationClosed.emit(this.notification())
  }

  protected readonly TechnicalNotificationType = TechnicalNotificationType;
}
