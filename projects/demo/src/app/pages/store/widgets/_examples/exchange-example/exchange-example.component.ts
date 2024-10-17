import { Component } from '@angular/core';
import { ExchangeWidgetComponent } from '@elementar/store/widgets';

@Component({
  selector: 'app-exchange-example',
  standalone: true,
  imports: [
    ExchangeWidgetComponent
  ],
  templateUrl: './exchange-example.component.html',
  styleUrl: './exchange-example.component.scss'
})
export class ExchangeExampleComponent {

}
