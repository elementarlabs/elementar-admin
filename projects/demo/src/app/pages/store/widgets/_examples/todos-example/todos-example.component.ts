import { Component, inject, input } from '@angular/core';
import { TodosWidgetComponent } from '@elementar/store/widgets';
import { DASHBOARD, Widget } from '@elementar/components/dashboard';

@Component({
  selector: 'app-todos-example',
  standalone: true,
  imports: [
    TodosWidgetComponent
  ],
  templateUrl: './todos-example.component.html',
  styleUrl: './todos-example.component.scss'
})
export class TodosExampleComponent {
}
