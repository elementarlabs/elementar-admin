import { Component } from '@angular/core';
import { PageComponent } from '@demo/meta/page/page.component';
import { PageContentDirective } from '@demo/meta/page/page-content.directive';
import { PlaygroundComponent } from '@demo/meta/playground/playground.component';
import {
  MchartPieBasicExampleComponent
} from '../_examples/mchart-pie-basic-example/mchart-pie-basic-example.component';
import {
  MchartPieWithLegendExampleComponent
} from '../_examples/mchart-pie-with-legend-example/mchart-pie-with-legend-example.component';
import {
  MchartPieValueOnSlicesExampleComponent
} from '../_examples/mchart-pie-value-on-slices-example/mchart-pie-value-on-slices-example.component';
import {
  MchartPieWithTooltipExampleComponent
} from '../_examples/mchart-pie-with-tooltip-example/mchart-pie-with-tooltip-example.component';

@Component({
  selector: 'app-overview',
  imports: [
    PageComponent,
    PageContentDirective,
    PlaygroundComponent,
    MchartPieBasicExampleComponent,
    MchartPieWithLegendExampleComponent,
    MchartPieValueOnSlicesExampleComponent,
    MchartPieWithTooltipExampleComponent
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
