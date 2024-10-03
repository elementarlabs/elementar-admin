import { booleanAttribute, Directive, input } from '@angular/core';

@Directive({
  selector: '[emrNotificationState]',
  exportAs: 'emrNotificationState',
  standalone: true,
  host: {
    'class': 'emr-notification-state',
    '[class.is-new]': 'isNew()',
  }
})
export class NotificationStateDirective {
  isNew = input(false, {
    transform: booleanAttribute
  });
  isRead = input(false, {
    transform: booleanAttribute
  });
}
