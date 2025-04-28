import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { SegmentedButtonComponent, SegmentedComponent } from '@elementar-ui/components/segmented';

@Component({
  selector: 'app-segmented-icons-only-example',
  imports: [
    MatIcon,
    SegmentedButtonComponent,
    SegmentedComponent
  ],
  templateUrl: './segmented-icons-only-example.component.html',
  styleUrl: './segmented-icons-only-example.component.scss'
})
export class SegmentedIconsOnlyExampleComponent {

}
