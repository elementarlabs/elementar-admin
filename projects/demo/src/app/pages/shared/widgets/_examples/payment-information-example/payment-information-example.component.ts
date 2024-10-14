import { Component } from '@angular/core';
import { PaymentInformationWidgetComponent } from '@elementar/shared/widgets';

@Component({
  selector: 'app-payment-information-example',
  standalone: true,
  imports: [
    PaymentInformationWidgetComponent
  ],
  templateUrl: './payment-information-example.component.html',
  styleUrl: './payment-information-example.component.scss'
})
export class PaymentInformationExampleComponent {

}
