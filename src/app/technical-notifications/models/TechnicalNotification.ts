export enum TechnicalNotificationType {
  INFO, ERROR, SUCCESS
}

export interface TechnicalNotification {
  orderedId: number; // notification ids should be ordered
  infoType: TechnicalNotificationType;
  text: string;
}

export function generateNotificationId(): number { return Date.now() }
