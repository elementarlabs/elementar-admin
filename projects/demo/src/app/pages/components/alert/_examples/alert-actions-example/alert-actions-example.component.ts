import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { AlertActionDirective, AlertCloseDirective, AlertComponent } from '@elementar/components/alert';

@Component({
  selector: 'app-alert-actions-example',
  imports: [
    MatIcon,
    AlertActionDirective,
    AlertCloseDirective,
    AlertComponent
  ],
  templateUrl: './alert-actions-example.component.html',
  styleUrl: './alert-actions-example.component.scss'
})
export class AlertActionsExampleComponent {

}
