import { Component } from '@angular/core';
import { PlaygroundComponent } from '@meta/playground/playground.component';
import { BasicTooltipExampleComponent } from '../_examples/basic-tooltip-example/basic-tooltip-example.component';
import {
  TooltipWithACustomPositionExampleComponent
} from '../_examples/tooltip-with-a-custom-position-example/tooltip-with-a-custom-position-example.component';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [
    PlaygroundComponent,
    BasicTooltipExampleComponent,
    TooltipWithACustomPositionExampleComponent
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
