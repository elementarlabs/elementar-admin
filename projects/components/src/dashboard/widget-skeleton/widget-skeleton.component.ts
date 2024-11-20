import { Component } from '@angular/core';
import { EmrSkeletonModule } from '@elementar/components/skeleton';

@Component({
  selector: 'emr-widget-skeleton',
  standalone: true,
  imports: [
    EmrSkeletonModule
  ],
  templateUrl: './widget-skeleton.component.html',
  styleUrl: './widget-skeleton.component.scss'
})
export class WidgetSkeletonComponent {

}
