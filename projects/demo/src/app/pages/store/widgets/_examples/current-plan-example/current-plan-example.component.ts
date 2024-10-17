import { Component } from '@angular/core';
import { CurrentPlanWidgetComponent } from '@elementar/store/widgets';

@Component({
  selector: 'app-current-plan-example',
  standalone: true,
  imports: [
    CurrentPlanWidgetComponent
  ],
  templateUrl: './current-plan-example.component.html',
  styleUrl: './current-plan-example.component.scss'
})
export class CurrentPlanExampleComponent {

}
