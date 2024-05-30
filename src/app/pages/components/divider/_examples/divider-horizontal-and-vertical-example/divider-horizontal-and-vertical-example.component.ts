import { Component } from '@angular/core';
import { HDividerComponent, VDividerComponent } from '@elementar/components';

@Component({
  selector: 'app-divider-horizontal-and-vertical-example',
  standalone: true,
  imports: [
    HDividerComponent,
    VDividerComponent
  ],
  templateUrl: './divider-horizontal-and-vertical-example.component.html',
  styleUrl: './divider-horizontal-and-vertical-example.component.scss'
})
export class DividerHorizontalAndVerticalExampleComponent {

}
