import { Directive, inject, TemplateRef } from '@angular/core';

@Directive({
  selector: '[emrNotificationControlsDef]',
  standalone: true
})
export class NotificationControlsDefDirective {
  readonly templateRef = inject(TemplateRef);
}
