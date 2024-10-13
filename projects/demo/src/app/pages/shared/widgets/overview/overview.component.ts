import { Component } from '@angular/core';

import { PageComponent } from '@demo/meta/page/page.component';
import { PageContentDirective } from '@demo/meta/page/page-content.directive';
import { PlaygroundComponent } from '@demo/meta/playground/playground.component';
import { AvgClickRateExampleComponent } from '../_examples/avg-click-rate-example/avg-click-rate-example.component';

@Component({
  standalone: true,
  imports: [
    PageComponent,
    PageContentDirective,
    PlaygroundComponent,
    AvgClickRateExampleComponent
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
