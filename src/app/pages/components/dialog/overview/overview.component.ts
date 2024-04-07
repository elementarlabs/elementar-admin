import { Component } from '@angular/core';
import { PlaygroundComponent } from '@meta/playground/playground.component';
import { BasicDialogExampleComponent } from '../_examples/basic-dialog-example/basic-dialog-example.component';
import {
  DialogScrollableContentExampleComponent
} from '../_examples/dialog-scrollable-content-example/dialog-scrollable-content-example.component';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [
    PlaygroundComponent,
    BasicDialogExampleComponent,
    DialogScrollableContentExampleComponent
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
