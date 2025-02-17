import { Component } from '@angular/core';
import { PageComponent } from '@meta/page/page.component';
import { PageContentDirective } from '@meta/page/page-content.directive';
import { PlaygroundComponent } from '@meta/playground/playground.component';
import { BasicRailNavExampleComponent } from '../_examples/basic-rail-nav-example/basic-rail-nav-example.component';
import {
  RailNavCustomizationExampleComponent
} from '../_examples/rail-nav-customization-example/rail-nav-customization-example.component';

@Component({
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
