import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { AlertComponent, AlertIconDirective } from '@elementar-ui/components/alert';

@Component({
  selector: 'app-alert-with-icon-example',
  imports: [
    MatIcon,
    AlertIconDirective,
    AlertComponent
  ],
  templateUrl: './alert-with-icon-example.component.html',
  styleUrl: './alert-with-icon-example.component.scss'
})
export class AlertWithIconExampleComponent {

}
