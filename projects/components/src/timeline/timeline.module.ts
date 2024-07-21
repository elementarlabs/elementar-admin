import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineComponent } from './timeline/timeline.component';
import { TimelineHeaderComponent } from './timeline-header/timeline-header.component';
import { TimelineItemComponent } from './timeline-item/timeline-item.component';
import { TimelineAttributesComponent } from './timeline-attributes/timeline-attributes.component';
import { TimelineDescriptionComponent } from './timeline-description/timeline-description.component';
import { TimelineTimestampComponent } from './timeline-timestamp/timeline-timestamp.component';
import { TimelineTitleComponent } from './timeline-title/timeline-title.component';
import { TimelineItemIndicatorDirective } from './timeline-item-indicator.directive';

@NgModule({
  declarations: [
    TimelineComponent,
    TimelineHeaderComponent,
    TimelineItemComponent,
    TimelineAttributesComponent,
    TimelineDescriptionComponent,
    TimelineTimestampComponent,
    TimelineTitleComponent,
    TimelineItemIndicatorDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TimelineComponent,
    TimelineHeaderComponent,
    TimelineItemComponent,
    TimelineAttributesComponent,
    TimelineDescriptionComponent,
    TimelineTimestampComponent,
    TimelineTitleComponent,
    TimelineItemIndicatorDirective
  ]
})
export class EmrTimelineModule { }
