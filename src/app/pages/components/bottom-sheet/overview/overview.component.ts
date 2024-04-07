import { Component } from '@angular/core';
import { BasicBadgesExampleComponent } from '../../badge/_examples/basic-badges-example/basic-badges-example.component';
import { PlaygroundComponent } from '@meta/playground/playground.component';
import {
  BasicBottomSheetExampleComponent
} from '../_examples/basic-bottom-sheet-example/basic-bottom-sheet-example.component';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [
    BasicBadgesExampleComponent,
    PlaygroundComponent,
    BasicBottomSheetExampleComponent
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
