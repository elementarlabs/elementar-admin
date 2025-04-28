import { Component } from '@angular/core';
import { PlaygroundComponent } from '@meta/playground/playground.component';
import { BasicIncidentsExampleComponent } from '../_examples/basic-incidents-example/basic-incidents-example.component';
import { PageComponent } from '@meta/page/page.component';
import { PageContentDirective } from '@meta/page/page-content.directive';
import {
  IncidentsShowHideDynamiclyExampleComponent
} from '../_examples/incidents-show-hide-dynamicly-example/incidents-show-hide-dynamicly-example.component';

@Component({
  imports: [
    PlaygroundComponent,
    BasicIncidentsExampleComponent,
    PageComponent,
    PageContentDirective,
    IncidentsShowHideDynamiclyExampleComponent
  ],
    templateUrl: './overview.component.html',
    styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
