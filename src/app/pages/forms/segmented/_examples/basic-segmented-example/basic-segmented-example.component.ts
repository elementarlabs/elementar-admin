import { Component } from '@angular/core';
import { EmrSegmentedModule } from '@elementar/components';

@Component({
  selector: 'app-basic-segmented-example',
  standalone: true,
  imports: [
    EmrSegmentedModule
  ],
  templateUrl: './basic-segmented-example.component.html',
  styleUrl: './basic-segmented-example.component.scss'
})
export class BasicSegmentedExampleComponent {

}
