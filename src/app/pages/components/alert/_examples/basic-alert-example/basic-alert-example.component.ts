import { Component } from '@angular/core';
import { EmrAlertModule } from '@elementar/components';

@Component({
  selector: 'app-basic-alert-example',
  standalone: true,
  imports: [
    EmrAlertModule
  ],
  templateUrl: './basic-alert-example.component.html',
  styleUrl: './basic-alert-example.component.scss'
})
export class BasicAlertExampleComponent {
}
