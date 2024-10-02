import { Directive, inject, input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[emrNotificationDef]',
  standalone: true
})
export class NotificationDefDirective {
  readonly templateRef = inject(TemplateRef);
  emrNotificationDef = input.required<string>();
}
