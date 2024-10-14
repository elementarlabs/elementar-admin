import { Component } from '@angular/core';
import { BankAccountCardComponent } from '@elementar/shared/widgets';

@Component({
  selector: 'app-bank-account-card-example',
  standalone: true,
  imports: [
    BankAccountCardComponent
  ],
  templateUrl: './bank-account-card-example.component.html',
  styleUrl: './bank-account-card-example.component.scss'
})
export class BankAccountCardExampleComponent {

}
