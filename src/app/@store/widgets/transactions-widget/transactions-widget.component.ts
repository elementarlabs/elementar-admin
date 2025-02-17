import { Component, input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

export interface Transaction {
  createdAt: string;
  status: 'cancelled' | 'approved';
  to: {
    amount: number;
    currency: string;
  },
  from: {
    amount: number;
    currency: string;
  },
  sender: {
    id: string | number;
    name: string;
  };
  recipient: {
    id: string | number;
    name: string;
  }
}

@Component({
    selector: 'emr-transactions-widget',
    imports: [
        MatIcon,
        RouterLink
    ],
    templateUrl: './transactions-widget.component.html',
    styleUrl: './transactions-widget.component.scss'
})
export class TransactionsWidgetComponent {
  transactions = input<Transaction[]>([]);
}
