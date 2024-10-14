import { Component } from '@angular/core';
import { CustomerSatisfactionWidgetComponent } from '@elementar/shared/widgets';

@Component({
  selector: 'app-customer-satisfaction-example',
  standalone: true,
  imports: [
    CustomerSatisfactionWidgetComponent
  ],
  templateUrl: './customer-satisfaction-example.component.html',
  styleUrl: './customer-satisfaction-example.component.scss'
})
export class CustomerSatisfactionExampleComponent {

}
