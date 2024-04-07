import { Component } from '@angular/core';
import { PlaygroundComponent } from '@meta/playground/playground.component';
import {
  BasicPhoneInputExampleComponent
} from '../_examples/basic-phone-input-example/basic-phone-input-example.component';

@Component({
  standalone: true,
  imports: [
    PlaygroundComponent,
    BasicPhoneInputExampleComponent
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
