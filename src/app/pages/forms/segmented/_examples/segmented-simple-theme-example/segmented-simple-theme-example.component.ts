import { Component } from '@angular/core';
import { EmrSegmentedModule } from '@elementar/components';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-segmented-simple-theme-example',
  standalone: true,
  imports: [
    EmrSegmentedModule,
    MatIcon
  ],
  templateUrl: './segmented-simple-theme-example.component.html',
  styleUrl: './segmented-simple-theme-example.component.scss'
})
export class SegmentedSimpleThemeExampleComponent {

}
