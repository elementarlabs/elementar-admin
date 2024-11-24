import { Component } from '@angular/core';
import { PlaygroundComponent } from '@demo/meta/playground/playground.component';
import {
  BasicCommandBarExampleComponent
} from '../_examples/basic-command-bar-example/basic-command-bar-example.component';
import { PageComponent } from '@demo/meta/page/page.component';
import { PageContentDirective } from '@demo/meta/page/page-content.directive';

@Component({
  selector: 'app-overview',
  imports: [
    PlaygroundComponent,
    BasicCommandBarExampleComponent,
    PageComponent,
    PageContentDirective
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
