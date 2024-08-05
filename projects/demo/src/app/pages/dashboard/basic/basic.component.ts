import { Component } from '@angular/core';
import { MatAnchor, MatButton, MatFabButton, MatIconButton, MatMiniFabButton } from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatOption, MatSelect } from '@angular/material/select';
import { MatCheckbox } from '@angular/material/checkbox';
import {
  TotalSubscribersWidgetComponent
} from '@demo/shared/widgets/total-subscribers-widget/total-subscribers-widget.component';
import { AvgOpenRateWidgetComponent } from '@demo/shared/widgets/avg-open-rate-widget/avg-open-rate-widget.component';
import { AvgClickRateWidgetComponent } from '@demo/shared/widgets/avg-click-rate-widget/avg-click-rate-widget.component';
import { UniqueVisitorsWidgetComponent } from '@demo/shared/widgets/unique-visitors-widget/unique-visitors-widget.component';
import { TotalTasksWidgetComponent } from '@demo/shared/widgets/total-tasks-widget/total-tasks-widget.component';
import { TotalProjectsWidgetComponent } from '@demo/shared/widgets/total-projects-widget/total-projects-widget.component';
import { EventsWidgetComponent } from '@demo/shared/widgets/events-widget/events-widget.component';
import { TeamWidgetComponent } from '@demo/shared/widgets/team-widget/team-widget.component';
import {
  TasksInProgressWidgetComponent
} from '@demo/shared/widgets/tasks-in-progress-widget/tasks-in-progress-widget.component';
import { TodosWidgetComponent } from '@demo/shared/widgets/todos-widget/todos-widget.component';

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
    TodosWidgetComponent
  ],
  templateUrl: './basic.component.html',
  styleUrl: './basic.component.scss'
})
export class BasicComponent {
}
