import { Component } from '@angular/core';
import { EmrSegmentedModule } from '@components/segmented/segmented.module';

@Component({
  selector: 'app-segmented-sizes-example',
  standalone: true,
  imports: [
    EmrSegmentedModule
  ],
  templateUrl: './segmented-sizes-example.component.html',
  styleUrl: './segmented-sizes-example.component.scss'
})
export class SegmentedSizesExampleComponent {

}
