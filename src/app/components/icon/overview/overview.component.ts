import { Component } from '@angular/core';
import { PlaygroundComponent } from '@meta/playground/playground.component';
import { CircleFlagsExampleComponent } from '../_examples/circle-flags-example/circle-flags-example.component';
import {
  MaterialSymbolsIconsExampleComponent
} from '../_examples/material-symbols-icons-example/material-symbols-icons-example.component';
import { PhosphorIconsExampleComponent } from '../_examples/phosphor-icons-example/phosphor-icons-example.component';
import { PageComponent } from '@meta/page/page.component';
import { PageContentDirective } from '@meta/page/page-content.directive';

@Component({
    imports: [
        PlaygroundComponent,
        CircleFlagsExampleComponent,
        MaterialSymbolsIconsExampleComponent,
        PhosphorIconsExampleComponent,
        PageComponent,
        PageContentDirective
    ],
    templateUrl: './overview.component.html',
    styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
