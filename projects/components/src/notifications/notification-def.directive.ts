import { Directive, input } from '@angular/core';

@Directive({
  selector: '[emrNotificationDef]',
  standalone: true
})
export class NotificationDefDirective {
  emrNotificationDef = input.required();
}
