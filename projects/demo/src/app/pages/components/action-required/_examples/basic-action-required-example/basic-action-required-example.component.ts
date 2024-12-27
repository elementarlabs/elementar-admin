import { Component } from '@angular/core';
import { ActionRequiredComponent } from '@elementar/components/action-required';

@Component({
  selector: 'app-basic-action-required-example',
  imports: [
    ActionRequiredComponent
  ],
  templateUrl: './basic-action-required-example.component.html',
  styleUrl: './basic-action-required-example.component.scss'
})
export class BasicActionRequiredExampleComponent {
  onButtonClicked() {
    console.log('Button Clicked');
  }
}
