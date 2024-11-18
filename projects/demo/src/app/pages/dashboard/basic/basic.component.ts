import { Component } from '@angular/core';
import { MatAnchor, MatButton, MatFabButton, MatIconButton, MatMiniFabButton } from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatOption, MatSelect } from '@angular/material/select';
import { MatCheckbox } from '@angular/material/checkbox';
import {
  AvgClickRateWidgetComponent,
  AvgOpenRateWidgetComponent,
  EventsWidgetComponent,
  TasksInProgressWidgetComponent,
  TeamWidgetComponent, TodosWidgetComponent,
  TotalProjectsWidgetComponent,
  TotalSubscribersWidgetComponent,
  TotalTasksWidgetComponent,
  UniqueVisitorsWidgetComponent
} from '@elementar/store/widgets';
import { DashboardComponent, DashboardWidget, DashboardWidgetDefDirective } from '@elementar/components/dashboard';
import { EmrSkeletonModule } from '@elementar/components/skeleton';

@Component({
  standalone: true,
  imports: [
    MatMiniFabButton,
    MatDivider,
    MatLabel,
    MatIcon,
    MatFabButton,
    MatIconButton,
    MatButton,
    MatAnchor,
    MatFormField,
    MatSelect,
    MatCheckbox,
    MatOption,
    TotalSubscribersWidgetComponent,
    AvgOpenRateWidgetComponent,
    AvgClickRateWidgetComponent,
    UniqueVisitorsWidgetComponent,
    TotalTasksWidgetComponent,
    TotalProjectsWidgetComponent,
    EventsWidgetComponent,
    TeamWidgetComponent,
    TasksInProgressWidgetComponent,
    TodosWidgetComponent,
    DashboardComponent,
    DashboardWidgetDefDirective,
    EmrSkeletonModule
  ],
  templateUrl: './basic.component.html',
  styleUrl: './basic.component.scss'
})
export class BasicComponent {
  widgets: DashboardWidget[] = [
    {
      id: 1,
      type: 'total-subscribers-widget',
      columns: 1
    },
    {
      id: 2,
      type: 'avg-open-rate-widget',
      columns: 1
    },
    {
      id: 3,
      type: 'emr-avg-click-rate-widget',
      columns: 1
    },
    {
      id: 4,
      type: 'unique-visitors-widget',
      columns: 1
    },
    {
      id: 5,
      type: 'total-tasks-widget',
      columns: 1
    },
    {
      id: 6,
      type: 'total-projects-widget',
      columns: 1
    },
    {
      id: 7,
      type: 'events-widget',
      columns: 1
    },
    {
      id: 8,
      type: 'team-widget',
      columns: 1
    },
    {
      id: 9,
      type: 'tasks-in-progress-widget',
      columns: 2
    },
    {
      id: 10,
      type: 'todos-widget',
      columns: 2
    }
  ];
}
