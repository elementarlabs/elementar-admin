import { Component } from '@angular/core';
import { PlaygroundComponent } from '@meta/playground/playground.component';
import { BasicCardExampleComponent } from '../_examples/basic-card-example/basic-card-example.component';
import { CardActionsExampleComponent } from '../_examples/card-actions-example/card-actions-example.component';
import {
  CardMultipleSectionsExampleComponent
} from '../_examples/card-multiple-sections-example/card-multiple-sections-example.component';
import {
  CardFooterLoadingExampleComponent
} from '../_examples/card-footer-loading-example/card-footer-loading-example.component';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [
    PlaygroundComponent,
    BasicCardExampleComponent,
    CardActionsExampleComponent,
    CardMultipleSectionsExampleComponent,
    CardFooterLoadingExampleComponent
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
