import { Component } from '@angular/core';
import { PageComponent } from '@demo/meta/page/page.component';
import { PageContentDirective } from '@demo/meta/page/page-content.directive';
import { PlaygroundComponent } from '@demo/meta/playground/playground.component';
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
import {
  MchartBarFillGradientExampleComponent
} from '../_examples/mchart-bar-fill-gradient-example/mchart-bar-fill-gradient-example.component';
import {
  MchartBarWithTooltipExampleComponent
} from '../_examples/mchart-bar-with-tooltip-example/mchart-bar-with-tooltip-example.component';

@Component({
    selector: 'app-overview',
    imports: [
        PageComponent,
        PageContentDirective,
        PlaygroundComponent,
        MchartBarBasicExampleComponent,
        MchartBarCustomRadiusExampleComponent,
        MchartBarWithBarHighlightExampleComponent,
        MchartBarResponsiveExampleComponent,
        MchartBarFillGradientExampleComponent,
        MchartBarWithTooltipExampleComponent
    ],
    templateUrl: './overview.component.html',
    styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
