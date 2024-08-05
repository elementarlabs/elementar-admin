import { Component } from '@angular/core';
import {
  BasicDividerExampleComponent
} from '../../divider/_examples/basic-divider-example/basic-divider-example.component';
import { PlaygroundComponent } from '@demo/meta/playground/playground.component';
import { BasicSliderExampleComponent } from '../_examples/basic-slider-example/basic-slider-example.component';
import {
  CustomThumbLabelFormattingExampleComponent
} from '../_examples/custom-thumb-label-formatting-example/custom-thumb-label-formatting-example.component';
import { RangeSliderExampleComponent } from '../_examples/range-slider-example/range-slider-example.component';
import {
  ConfigurableSliderExampleComponent
} from '../_examples/configurable-slider-example/configurable-slider-example.component';
import { PageComponent } from '@demo/meta/page/page.component';
import { PageContentDirective } from '@demo/meta/page/page-content.directive';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [
    BasicDividerExampleComponent,
    PlaygroundComponent,
    BasicSliderExampleComponent,
    CustomThumbLabelFormattingExampleComponent,
    RangeSliderExampleComponent,
    ConfigurableSliderExampleComponent,
    PageComponent,
    PageContentDirective
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
