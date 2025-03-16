import { Component } from '@angular/core';
import { SkeletonBlockComponent, SkeletonComponent, SkeletonLineComponent } from '@elementar-ui/components/skeleton';

@Component({
  selector: 'emr-widget-skeleton',
  exportAs: 'emrWidgetSkeleton',
  imports: [
    SkeletonLineComponent,
    SkeletonBlockComponent,
    SkeletonComponent
  ],
  templateUrl: './widget-skeleton.component.html',
  styleUrl: './widget-skeleton.component.scss',
  host: {
    'class': 'emr-widget-skeleton',
  }
})
export class WidgetSkeletonComponent {

}
