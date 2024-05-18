import { Component } from '@angular/core';
import { PlaygroundComponent } from '@meta/playground/playground.component';
import { PageComponent } from '@meta/page/page.component';
import { PageContentDirective } from '@meta/page/page-content.directive';
import { MicroChartBarExampleComponent } from '../_examples/micro-chart-bar-example/micro-chart-bar-example.component';
import { MchartLineExampleComponent } from '../_examples/mchart-line-example/mchart-line-example.component';

@Component({
  standalone: true,
  imports: [
    PlaygroundComponent,
    PageComponent,
    PageContentDirective,
    MicroChartBarExampleComponent,
    MchartLineExampleComponent
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
