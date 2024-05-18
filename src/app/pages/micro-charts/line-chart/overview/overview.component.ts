import { Component } from '@angular/core';
import { PageComponent } from '@meta/page/page.component';
import { PageContentDirective } from '@meta/page/page-content.directive';
import { PlaygroundComponent } from '@meta/playground/playground.component';
import {
  MchartLineWithTooltipExampleComponent
} from '../_examples/mchart-line-with-tooltip-example/mchart-line-with-tooltip-example.component';
import {
  MchartLineBasicExampleComponent
} from '../_examples/mchart-line-basic-example/mchart-line-basic-example.component';
import {
  MchartLineCustomCurveExampleComponent
} from '../_examples/mchart-line-custom-curve-example/mchart-line-custom-curve-example.component';
import {
  MchartLineWithAreaExampleComponent
} from '../_examples/mchart-line-with-area-example/mchart-line-with-area-example.component';
import {
  MchartLineCompactExampleComponent
} from '../_examples/mchart-line-compact-example/mchart-line-compact-example.component';
import {
  MchartLineWithMarkersExampleComponent
} from '../_examples/mchart-line-with-markers-example/mchart-line-with-markers-example.component';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [
    PageComponent,
    PageContentDirective,
    PlaygroundComponent,
    MchartLineWithTooltipExampleComponent,
    MchartLineBasicExampleComponent,
    MchartLineCustomCurveExampleComponent,
    MchartLineWithAreaExampleComponent,
    MchartLineCompactExampleComponent,
    MchartLineWithMarkersExampleComponent
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
