import { Component } from '@angular/core';
import { Transaction, TransactionsWidgetComponent } from '../../../../_store/widgets';

@Component({
  selector: 'app-transactions-example',
  imports: [
    TransactionsWidgetComponent
  ],
  templateUrl: './transactions-example.component.html',
  styleUrl: './transactions-example.component.scss'
})
export class TransactionsExampleComponent {
  transactions: Transaction[] = [
    {
      createdAt: '14 Feb',
      status: 'approved',
      to: {
        amount: 129.81,
        currency: 'GPB'
      },
      from: {
        amount: 50,
        currency: 'USD'
      },
      sender: {
        id: 1,
        name: 'Pavel Salauyou'
      },
      recipient: {
        id: 1,
        name: 'Pavel Salauyou'
      }
    },
    {
      createdAt: '14 Feb',
      status: 'cancelled',
      to: {
        amount: 129.81,
        currency: 'GPB'
      },
      from: {
        amount: 50,
        currency: 'USD'
      },
      sender: {
        id: 1,
        name: 'Pavel Salauyou'
      },
      recipient: {
        id: 1,
        name: 'Pavel Salauyou'
      }
    },
    {
      createdAt: '12 Feb',
      status: 'cancelled',
      to: {
        amount: 100.02,
        currency: 'GPB'
      },
      from: {
        amount: 44,
        currency: 'USD'
      },
      sender: {
        id: 1,
        name: 'Pavel Salauyou'
      },
      recipient: {
        id: 1,
        name: 'Pavel Salauyou'
      }
    },
    {
      createdAt: '12 Feb',
      status: 'approved',
      to: {
        amount: 155.81,
        currency: 'GPB'
      },
      from: {
        amount: 55,
        currency: 'USD'
      },
      sender: {
        id: 1,
        name: 'Pavel Salauyou'
      },
      recipient: {
        id: 1,
        name: 'Pavel Salauyou'
      }
    },
  ];
}
