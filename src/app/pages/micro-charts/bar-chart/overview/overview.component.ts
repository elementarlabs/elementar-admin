import { Component } from '@angular/core';
import { PageComponent } from '@meta/page/page.component';
import { PageContentDirective } from '@meta/page/page-content.directive';
import { PlaygroundComponent } from '@meta/playground/playground.component';
import {
  MchartBarBasicExampleComponent
} from '../_examples/mchart-bar-basic-example/mchart-bar-basic-example.component';
import {
  MchartBarCustomRadiusExampleComponent
} from '../_examples/mchart-bar-custom-radius-example/mchart-bar-custom-radius-example.component';
import {
  MchartBarWithBarHighlightExampleComponent
} from '../_examples/mchart-bar-with-bar-highlight-example/mchart-bar-with-bar-highlight-example.component';
import {
  MchartBarResponsiveExampleComponent
} from '../_examples/mchart-bar-responsive-example/mchart-bar-responsive-example.component';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [
    PageComponent,
    PageContentDirective,
    PlaygroundComponent,
    MchartBarBasicExampleComponent,
    MchartBarCustomRadiusExampleComponent,
    MchartBarWithBarHighlightExampleComponent,
    MchartBarResponsiveExampleComponent
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
