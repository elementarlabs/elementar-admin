import { Component } from '@angular/core';
import { PlaygroundComponent } from '@meta/playground/playground.component';
import {
  MicroChartAreaLineExampleComponent
} from '../_examples/micro-chart-area-line-example/micro-chart-area-line-example.component';
import { PageComponent } from '@meta/page/page.component';
import { PageContentDirective } from '@meta/page/page-content.directive';
import { MicroChartBarExampleComponent } from '../_examples/micro-chart-bar-example/micro-chart-bar-example.component';

@Component({
  standalone: true,
  imports: [
    PlaygroundComponent,
    MicroChartAreaLineExampleComponent,
    PageComponent,
    PageContentDirective,
    MicroChartBarExampleComponent
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
