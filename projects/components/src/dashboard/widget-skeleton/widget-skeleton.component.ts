import { Component } from '@angular/core';
import { SkeletonBlockComponent, SkeletonLineComponent } from '@elementar/components/skeleton';

@Component({
  selector: 'emr-widget-skeleton',
  imports: [
    SkeletonLineComponent,
    SkeletonBlockComponent
  ],
  templateUrl: './widget-skeleton.component.html',
  styleUrl: './widget-skeleton.component.scss'
})
export class WidgetSkeletonComponent {

}
