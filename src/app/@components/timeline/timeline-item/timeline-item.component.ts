import { Component, ContentChild } from '@angular/core';
import { TimelineItemIndicatorDirective } from '../timeline-item-indicator.directive';

@Component({
  selector: 'emr-timeline-item',
  exportAs: 'emrTimelineItem',
  templateUrl: './timeline-item.component.html',
  styleUrl: './timeline-item.component.css',
  host: {
    'class': 'emr-timeline-item'
  }
})
export class TimelineItemComponent {
  @ContentChild(TimelineItemIndicatorDirective)
  readonly indicatorRef: TimelineItemIndicatorDirective;
}
