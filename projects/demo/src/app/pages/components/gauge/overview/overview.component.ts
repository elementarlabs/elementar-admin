import { Component } from '@angular/core';
import { PlaygroundComponent } from '@demo/meta/playground/playground.component';
import { BasicGaugeExampleComponent } from '../_examples/basic-gauge-example/basic-gauge-example.component';
import {
  GaugeWithValueExampleComponent
} from '../_examples/gauge-with-value-example/gauge-with-value-example.component';
import {
  GaugeCustomSizeExampleComponent
} from '../_examples/gauge-custom-size-example/gauge-custom-size-example.component';
import {
  GaugeCustomStrokeWidthExampleComponent
} from '../_examples/gauge-custom-stroke-width-example/gauge-custom-stroke-width-example.component';
import { PageComponent } from '@demo/meta/page/page.component';
import { PageContentDirective } from '@demo/meta/page/page-content.directive';

@Component({
  selector: 'app-overview',
  imports: [
    PlaygroundComponent,
    BasicGaugeExampleComponent,
    GaugeWithValueExampleComponent,
    GaugeCustomSizeExampleComponent,
    GaugeCustomStrokeWidthExampleComponent,
    PageComponent,
    PageContentDirective
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
