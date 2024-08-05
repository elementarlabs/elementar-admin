import { Component } from '@angular/core';
import { PlaygroundComponent } from '@demo/meta/playground/playground.component';
import { BasicDividerExampleComponent } from '../_examples/basic-divider-example/basic-divider-example.component';
import { PageComponent } from '@demo/meta/page/page.component';
import { PageContentDirective } from '@demo/meta/page/page-content.directive';
import {
  DividerHorizontalAndVerticalExampleComponent
} from '../_examples/divider-horizontal-and-vertical-example/divider-horizontal-and-vertical-example.component';

@Component({
  standalone: true,
  imports: [
    PlaygroundComponent,
    BasicDividerExampleComponent,
    PageComponent,
    PageContentDirective,
    DividerHorizontalAndVerticalExampleComponent
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
