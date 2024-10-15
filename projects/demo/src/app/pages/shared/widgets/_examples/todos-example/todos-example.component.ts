import { Component } from '@angular/core';
import { TodosWidgetComponent } from '@elementar/shared/widgets';

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
