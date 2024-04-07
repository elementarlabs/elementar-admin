import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-payment-information-widget',
  standalone: true,
  imports: [
    MatButton,
    RouterLink
  ],
  templateUrl: './payment-information-widget.component.html',
  styleUrl: './payment-information-widget.component.scss'
})
export class PaymentInformationWidgetComponent {

}
