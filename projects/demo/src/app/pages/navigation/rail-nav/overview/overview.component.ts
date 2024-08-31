import { Component } from '@angular/core';
import { PageComponent } from '@demo/meta/page/page.component';
import { PageContentDirective } from '@demo/meta/page/page-content.directive';
import { PlaygroundComponent } from '@demo/meta/playground/playground.component';
import { BasicRailNavExampleComponent } from '../_examples/basic-rail-nav-example/basic-rail-nav-example.component';
import {
  RailNavCustomizationExampleComponent
} from '../_examples/rail-nav-customization-example/rail-nav-customization-example.component';

@Component({
  standalone: true,
  imports: [
    PageComponent,
    PageContentDirective,
    PlaygroundComponent,
    BasicRailNavExampleComponent,
    RailNavCustomizationExampleComponent
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
