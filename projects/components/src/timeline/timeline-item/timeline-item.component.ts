import { Component, ContentChild } from '@angular/core';
import { TimelineItemIndicatorDirective } from '../timeline-item-indicator.directive';
import { NgTemplateOutlet } from '@angular/common';

@Component({
    selector: 'emr-timeline-item',
    exportAs: 'emrTimelineItem',
    templateUrl: './timeline-item.component.html',
    styleUrl: './timeline-item.component.scss',
    host: {
        'class': 'emr-timeline-item'
    },
    imports: [NgTemplateOutlet]
})
export class TimelineItemComponent {
  @ContentChild(TimelineItemIndicatorDirective)
  readonly indicatorRef: TimelineItemIndicatorDirective;
}
