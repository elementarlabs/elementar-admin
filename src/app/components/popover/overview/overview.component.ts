import { Component } from '@angular/core';
import { BasicPopoverExampleComponent } from '../_examples/basic-popover-example/basic-popover-example.component';
import { PlaygroundComponent } from '@meta/playground/playground.component';
import { PopoverHoverExampleComponent } from '../_examples/popover-hover-example/popover-hover-example.component';
import {
  PopoverWithCustomPositionExampleComponent
} from '../_examples/popover-with-custom-position-example/popover-with-custom-position-example.component';
import { PageComponent } from '@meta/page/page.component';
import { PageContentDirective } from '@meta/page/page-content.directive';
import { MatTab, MatTabGroup } from '@angular/material/tabs';

@Component({
    selector: 'app-overview',
  imports: [
    PlaygroundComponent,
    BasicPopoverExampleComponent,
    PopoverHoverExampleComponent,
    PopoverWithCustomPositionExampleComponent,
    PageComponent,
    PageContentDirective,
    MatTab,
    MatTabGroup
  ],
    templateUrl: './overview.component.html',
    styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
