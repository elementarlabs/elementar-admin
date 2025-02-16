import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { SegmentedButtonComponent, SegmentedComponent } from '@elementar-ui/components';

@Component({
  selector: 'app-segmented-with-icons-example',
  imports: [
    MatIcon,
    SegmentedButtonComponent,
    SegmentedComponent
  ],
  templateUrl: './segmented-with-icons-example.component.html',
  styleUrl: './segmented-with-icons-example.component.scss'
})
export class SegmentedWithIconsExampleComponent {

}
