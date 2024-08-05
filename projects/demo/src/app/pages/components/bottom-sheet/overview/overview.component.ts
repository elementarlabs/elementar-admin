import { Component } from '@angular/core';
import { BasicBadgesExampleComponent } from '../../badge/_examples/basic-badges-example/basic-badges-example.component';
import { PlaygroundComponent } from '@demo/meta/playground/playground.component';
import {
  BasicBottomSheetExampleComponent
} from '../_examples/basic-bottom-sheet-example/basic-bottom-sheet-example.component';
import { PageComponent } from '@demo/meta/page/page.component';
import { PageContentDirective } from '@demo/meta/page/page-content.directive';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [
    BasicBadgesExampleComponent,
    PlaygroundComponent,
    BasicBottomSheetExampleComponent,
    PageComponent,
    PageContentDirective
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
