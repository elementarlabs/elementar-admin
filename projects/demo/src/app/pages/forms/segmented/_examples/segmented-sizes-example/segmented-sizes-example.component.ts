import { Component } from '@angular/core';
import { SegmentedButtonComponent, SegmentedComponent } from '@elementar/components/segmented';

@Component({
  selector: 'app-segmented-sizes-example',
  standalone: true,
  imports: [
    SegmentedComponent,
    SegmentedButtonComponent
  ],
  templateUrl: './segmented-sizes-example.component.html',
  styleUrl: './segmented-sizes-example.component.scss'
})
export class SegmentedSizesExampleComponent {

}
