import { Component } from '@angular/core';
import { PlaygroundComponent } from '@meta/playground/playground.component';
import { CircleFlagsExampleComponent } from '../_examples/circle-flags-example/circle-flags-example.component';
import {
  MaterialSymbolsIconsExampleComponent
} from '../_examples/material-symbols-icons-example/material-symbols-icons-example.component';

@Component({
  standalone: true,
  imports: [
    PlaygroundComponent,
    CircleFlagsExampleComponent,
    MaterialSymbolsIconsExampleComponent
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
