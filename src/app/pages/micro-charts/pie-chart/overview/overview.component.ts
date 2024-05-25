import { Component } from '@angular/core';
import { PageComponent } from '@meta/page/page.component';
import { PageContentDirective } from '@meta/page/page-content.directive';
import { PlaygroundComponent } from '@meta/playground/playground.component';
import {
  MchartPieBasicExampleComponent
} from '../_examples/mchart-pie-basic-example/mchart-pie-basic-example.component';
import {
  MchartPieWithLegendExampleComponent
} from '../_examples/mchart-pie-with-legend-example/mchart-pie-with-legend-example.component';
import {
  MchartPieValueOnSlicesExampleComponent
} from '../_examples/mchart-pie-value-on-slices-example/mchart-pie-value-on-slices-example.component';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [
    PageComponent,
    PageContentDirective,
    PlaygroundComponent,
    MchartPieBasicExampleComponent,
    MchartPieWithLegendExampleComponent,
    MchartPieValueOnSlicesExampleComponent
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
