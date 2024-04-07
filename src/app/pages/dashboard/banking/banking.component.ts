import { Component } from '@angular/core';
import { BankCreditCardComponent } from '@shared/widgets/bank-credit-card/bank-credit-card.component';
import { BankAccountCardComponent } from '@shared/widgets/bank-account-card/bank-account-card.component';
import { MyInvestmentsComponent } from '@shared/widgets/my-investments/my-investments.component';

@Component({
  standalone: true,
  imports: [
    BankCreditCardComponent,
    BankAccountCardComponent,
    MyInvestmentsComponent
  ],
  templateUrl: './banking.component.html',
  styleUrl: './banking.component.scss'
})
export class BankingComponent {

}
