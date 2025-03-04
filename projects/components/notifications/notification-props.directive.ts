import { booleanAttribute, Directive, input } from '@angular/core';

@Directive({
  selector: '[emrNotificationProps]',
  exportAs: 'emrNotificationProps',
  standalone: true,
  host: {
    'class': 'emr-notification-props',
    '[class.is-new]': 'isNew()',
    '[class.read]': 'read()',
  }
})
export class NotificationPropsDirective {
  isNew = input(false, {
    transform: booleanAttribute
  });
  read = input(false, {
    transform: booleanAttribute
  });
}
