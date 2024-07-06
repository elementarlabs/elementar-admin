import { Component } from '@angular/core';
import { PageComponent } from '@meta/page/page.component';
import { PageContentDirective } from '@meta/page/page-content.directive';
import { PlaygroundComponent } from '@meta/playground/playground.component';
import { BasicConfirmExampleComponent } from '../_examples/basic-confirm-example/basic-confirm-example.component';
import {
  ConfirmFormModalExampleComponent
} from '../_examples/confirm-form-modal-example/confirm-form-modal-example.component';

@Component({
  standalone: true,
  imports: [
    PageComponent,
    PageContentDirective,
    PlaygroundComponent,
    BasicConfirmExampleComponent,
    ConfirmFormModalExampleComponent
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
