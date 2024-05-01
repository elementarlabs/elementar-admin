import { Component } from '@angular/core';
import { PlaygroundComponent } from '@meta/playground/playground.component';
import { BasicDividerExampleComponent } from '../_examples/basic-divider-example/basic-divider-example.component';
import {
  DividerWithTextExampleComponent
} from '../_examples/divider-with-text-example/divider-with-text-example.component';
import { PageComponent } from '@meta/page/page.component';
import { PageContentDirective } from '@meta/page/page-content.directive';

@Component({
  standalone: true,
  imports: [
    PlaygroundComponent,
    BasicDividerExampleComponent,
    DividerWithTextExampleComponent,
    PageComponent,
    PageContentDirective
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
