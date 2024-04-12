import { Component } from '@angular/core';
import { EmrAlertModule } from '@elementar/components';

@Component({
  selector: 'app-alert-with-border-example',
  standalone: true,
  imports: [
    EmrAlertModule
  ],
  templateUrl: './alert-with-border-example.component.html',
  styleUrl: './alert-with-border-example.component.scss'
})
export class AlertWithBorderExampleComponent {

}
