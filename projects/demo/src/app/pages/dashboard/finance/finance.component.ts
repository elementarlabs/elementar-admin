import { Component } from '@angular/core';
import { AvgClickRateWidgetComponent } from '@demo/shared/widgets/avg-click-rate-widget/avg-click-rate-widget.component';
import { AvgOpenRateWidgetComponent } from '@demo/shared/widgets/avg-open-rate-widget/avg-open-rate-widget.component';
import { EventsWidgetComponent } from '@demo/shared/widgets/events-widget/events-widget.component';
import {
  TasksInProgressWidgetComponent
} from '@demo/shared/widgets/tasks-in-progress-widget/tasks-in-progress-widget.component';
import { TeamWidgetComponent } from '@demo/shared/widgets/team-widget/team-widget.component';
import { TodosWidgetComponent } from '@demo/shared/widgets/todos-widget/todos-widget.component';
import { TotalProjectsWidgetComponent } from '@demo/shared/widgets/total-projects-widget/total-projects-widget.component';
import {
  TotalSubscribersWidgetComponent
} from '@demo/shared/widgets/total-subscribers-widget/total-subscribers-widget.component';
import { TotalTasksWidgetComponent } from '@demo/shared/widgets/total-tasks-widget/total-tasks-widget.component';
import { UniqueVisitorsWidgetComponent } from '@demo/shared/widgets/unique-visitors-widget/unique-visitors-widget.component';
import { DecimalPipe } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { IconComponent } from '@elementar/components/icon';
import { MatRipple } from '@angular/material/core';
import { RouterLink } from '@angular/router';
import {
  Transaction,
  TransactionsWidgetComponent
} from '@demo/shared/widgets/transactions-widget/transactions-widget.component';

@Component({
  standalone: true,
  imports: [
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
    DecimalPipe,
    MatButton,
    MatIcon,
    IconComponent,
    MatRipple,
    RouterLink,
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
