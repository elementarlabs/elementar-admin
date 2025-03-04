import { Component, input, output } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'emr-action-required',
  exportAs: 'emrActionRequired',
  imports: [
    MatButton,
    MatIcon
  ],
  templateUrl: './action-required.component.html',
  styleUrl: './action-required.component.scss',
  host: {
    'class': 'emr-action-required',
  }
})
export class ActionRequiredComponent {
  actionText = input();
  iconName = input();
  description = input.required();
  buttonText = input.required();

  readonly buttonClicked = output<void>();
}
