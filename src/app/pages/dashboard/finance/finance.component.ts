import { Component } from '@angular/core';
import { AvgClickRateWidgetComponent } from '@shared/widgets/avg-click-rate-widget/avg-click-rate-widget.component';
import { AvgOpenRateWidgetComponent } from '@shared/widgets/avg-open-rate-widget/avg-open-rate-widget.component';
import { EventsWidgetComponent } from '@shared/widgets/events-widget/events-widget.component';
import {
  TasksInProgressWidgetComponent
} from '@shared/widgets/tasks-in-progress-widget/tasks-in-progress-widget.component';
import { TeamWidgetComponent } from '@shared/widgets/team-widget/team-widget.component';
import { TodosWidgetComponent } from '@shared/widgets/todos-widget/todos-widget.component';
import { TotalProjectsWidgetComponent } from '@shared/widgets/total-projects-widget/total-projects-widget.component';
import {
  TotalSubscribersWidgetComponent
} from '@shared/widgets/total-subscribers-widget/total-subscribers-widget.component';
import { TotalTasksWidgetComponent } from '@shared/widgets/total-tasks-widget/total-tasks-widget.component';
import { UniqueVisitorsWidgetComponent } from '@shared/widgets/unique-visitors-widget/unique-visitors-widget.component';
import { DecimalPipe } from '@angular/common';

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
    DecimalPipe
  ],
  templateUrl: './finance.component.html',
  styleUrl: './finance.component.scss'
})
export class FinanceComponent {
  totalBalance = 2136;
  currencyCode = 'usd';
}
