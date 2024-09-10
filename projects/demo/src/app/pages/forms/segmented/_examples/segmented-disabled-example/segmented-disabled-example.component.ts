import { Component } from '@angular/core';
import { SegmentedButtonComponent, SegmentedComponent } from '@elementar/components/segmented';

@Component({
  selector: 'app-segmented-disabled-example',
  standalone: true,
  imports: [
    SegmentedButtonComponent,
    SegmentedComponent
  ],
  templateUrl: './segmented-disabled-example.component.html',
  styleUrl: './segmented-disabled-example.component.scss'
})
export class SegmentedDisabledExampleComponent {

}
