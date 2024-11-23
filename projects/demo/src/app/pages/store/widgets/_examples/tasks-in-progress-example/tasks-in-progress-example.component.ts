import { Component } from '@angular/core';
import { TasksInProgressWidgetComponent } from '@elementar/store/widgets';

@Component({
    selector: 'app-tasks-in-progress-example',
    imports: [
        TasksInProgressWidgetComponent
    ],
    templateUrl: './tasks-in-progress-example.component.html',
    styleUrl: './tasks-in-progress-example.component.scss'
})
export class TasksInProgressExampleComponent {

}
