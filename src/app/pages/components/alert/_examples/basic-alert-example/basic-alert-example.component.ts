import { Component } from '@angular/core';
import { EmrAlertModule } from '@components/alert';

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
  variant = 'default';
  bordered = false;
}
