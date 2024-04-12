import { Component } from '@angular/core';
import { EmrAlertModule } from '@elementar/components';

@Component({
  selector: 'app-alert-with-title-example',
  standalone: true,
  imports: [
    EmrAlertModule
  ],
  templateUrl: './alert-with-title-example.component.html',
  styleUrl: './alert-with-title-example.component.scss'
})
export class AlertWithTitleExampleComponent {

}
