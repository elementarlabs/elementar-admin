import { Component } from '@angular/core';
import { EmrAlertModule } from '@components/alert';

@Component({
  selector: 'app-alert-variants-example',
  standalone: true,
  imports: [
    EmrAlertModule
  ],
  templateUrl: './alert-variants-example.component.html',
  styleUrl: './alert-variants-example.component.scss'
})
export class AlertVariantsExampleComponent {

}
