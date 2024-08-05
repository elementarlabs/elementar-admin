import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { EmrSegmentedModule } from '@elementar/components/segmented';

@Component({
  selector: 'app-segmented-with-icons-example',
  standalone: true,
  imports: [
    MatIcon,
    EmrSegmentedModule
  ],
  templateUrl: './segmented-with-icons-example.component.html',
  styleUrl: './segmented-with-icons-example.component.scss'
})
export class SegmentedWithIconsExampleComponent {

}
