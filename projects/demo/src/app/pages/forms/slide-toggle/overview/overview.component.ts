import { Component } from '@angular/core';
import { PlaygroundComponent } from '@demo/meta/playground/playground.component';
import {
  BasicSlideToggleExampleComponent
} from '../_examples/basic-slide-toggle-example/basic-slide-toggle-example.component';
import {
  SlideToggleWithFormsExampleComponent
} from '../_examples/slide-toggle-with-forms-example/slide-toggle-with-forms-example.component';
import { PageComponent } from '@demo/meta/page/page.component';
import { PageContentDirective } from '@demo/meta/page/page-content.directive';

@Component({
    imports: [
        PlaygroundComponent,
        BasicSlideToggleExampleComponent,
        SlideToggleWithFormsExampleComponent,
        PageComponent,
        PageContentDirective
    ],
    templateUrl: './overview.component.html',
    styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
