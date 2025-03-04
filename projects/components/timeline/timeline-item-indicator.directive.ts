import { Directive, inject, TemplateRef } from '@angular/core';

@Directive({
    selector: '[emrTimelineItemIndicator]',
    exportAs: 'emrTimelineItemIndicator'
})
export class TimelineItemIndicatorDirective {
  readonly templateRef = inject(TemplateRef);
}
