import { Component } from '@angular/core';
import { SkeletonBlockComponent, SkeletonLineComponent } from '../../skeleton';

@Component({
  selector: 'emr-widget-skeleton',
  exportAs: 'emrWidgetSkeleton',
  imports: [
    SkeletonLineComponent,
    SkeletonBlockComponent
  ],
  templateUrl: './widget-skeleton.component.html',
  styleUrl: './widget-skeleton.component.scss',
  host: {
    'class': 'emr-widget-skeleton',
  }
})
export class WidgetSkeletonComponent {

}
