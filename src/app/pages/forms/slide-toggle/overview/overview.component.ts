import { Component } from '@angular/core';
import { PlaygroundComponent } from '@meta/playground/playground.component';
import {
  BasicSlideToggleExampleComponent
} from '../_examples/basic-slide-toggle-example/basic-slide-toggle-example.component';
import {
  SlideToggleWithFormsExampleComponent
} from '../_examples/slide-toggle-with-forms-example/slide-toggle-with-forms-example.component';

@Component({
  standalone: true,
  imports: [
    PlaygroundComponent,
    BasicSlideToggleExampleComponent,
    SlideToggleWithFormsExampleComponent
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
