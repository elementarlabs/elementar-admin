import { Directive, inject, input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[emrDashboardWidgetDef]',
  standalone: true
})
export class DashboardWidgetDefDirective {
  readonly templateRef = inject(TemplateRef);
  emrDashboardWidgetDef = input.required<string>()
}
