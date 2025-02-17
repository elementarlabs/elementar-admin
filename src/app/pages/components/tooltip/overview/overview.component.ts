import { Component } from '@angular/core';
import { PlaygroundComponent } from '@meta/playground/playground.component';
import { BasicTooltipExampleComponent } from '../_examples/basic-tooltip-example/basic-tooltip-example.component';
import {
  TooltipWithACustomPositionExampleComponent
} from '../_examples/tooltip-with-a-custom-position-example/tooltip-with-a-custom-position-example.component';
import { PageComponent } from '@meta/page/page.component';
import { PageContentDirective } from '@meta/page/page-content.directive';

@Component({
    selector: 'app-overview',
    imports: [
        PlaygroundComponent,
        BasicTooltipExampleComponent,
        TooltipWithACustomPositionExampleComponent,
        PageComponent,
        PageContentDirective
    ],
    templateUrl: './overview.component.html',
    styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
