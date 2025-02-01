import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SegmentedButtonComponent, SegmentedComponent } from '@elementar-ui/components/segmented';

@Component({
    selector: 'app-basic-segmented-example',
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
