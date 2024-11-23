import { Directive, inject, TemplateRef } from '@angular/core';

@Directive({
    selector: '[emrTimelineItemIndicator]',
    exportAs: 'emrTimelineItemIndicator',
    standalone: false
})
export class TimelineItemIndicatorDirective {
  readonly templateRef = inject(TemplateRef);
}
