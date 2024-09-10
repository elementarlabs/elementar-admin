import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SegmentedButtonComponent, SegmentedComponent } from '@elementar/components/segmented';

@Component({
  selector: 'app-basic-segmented-example',
  standalone: true,
  imports: [
    FormsModule,
    SegmentedComponent,
    SegmentedButtonComponent
  ],
  templateUrl: './basic-segmented-example.component.html',
  styleUrl: './basic-segmented-example.component.scss'
})
export class BasicSegmentedExampleComponent {
  period = 'monthly';
}
