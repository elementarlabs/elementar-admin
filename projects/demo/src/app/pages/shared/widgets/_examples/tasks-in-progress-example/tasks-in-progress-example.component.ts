import { Component } from '@angular/core';
import { TasksInProgressWidgetComponent } from '@elementar/shared/widgets';

@Component({
  selector: 'app-tasks-in-progress-example',
  standalone: true,
  imports: [
    TasksInProgressWidgetComponent
  ],
  templateUrl: './tasks-in-progress-example.component.html',
  styleUrl: './tasks-in-progress-example.component.scss'
})
export class TasksInProgressExampleComponent {

}
