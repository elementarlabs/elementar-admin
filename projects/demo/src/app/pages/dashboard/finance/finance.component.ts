import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { IconComponent } from '@elementar/components/icon';
import { MatRipple } from '@angular/material/core';
import { RouterLink } from '@angular/router';
import {
  AvgClickRateWidgetComponent,
  AvgOpenRateWidgetComponent,
  EventsWidgetComponent,
  TasksInProgressWidgetComponent,
  TeamWidgetComponent,
  TodosWidgetComponent, TotalProjectsWidgetComponent,
  TotalSubscribersWidgetComponent, TotalTasksWidgetComponent, Transaction,
  TransactionsWidgetComponent, UniqueVisitorsWidgetComponent
} from '@elementar/store/widgets';

@Component({
    imports: [
        DecimalPipe,
        MatButton,
        MatIcon,
        IconComponent,
        MatRipple,
        RouterLink,
        AvgClickRateWidgetComponent,
        AvgOpenRateWidgetComponent,
        EventsWidgetComponent,
        TasksInProgressWidgetComponent,
        TeamWidgetComponent,
        TodosWidgetComponent,
        TotalProjectsWidgetComponent,
        TotalSubscribersWidgetComponent,
        TotalTasksWidgetComponent,
        UniqueVisitorsWidgetComponent,
        TransactionsWidgetComponent
    ],
    templateUrl: './finance.component.html',
    styleUrl: './finance.component.scss'
})
export class FinanceComponent {
  totalBalance = 2136;
  currencyCode = 'usd';
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
  protected readonly screen = screen;
}
