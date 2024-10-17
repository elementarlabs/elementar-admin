import { Component } from '@angular/core';
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

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
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
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
