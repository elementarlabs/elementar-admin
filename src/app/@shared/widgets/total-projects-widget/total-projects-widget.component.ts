import { Component } from '@angular/core';
import { LineMicroChartComponent } from '@elementar/components';

@Component({
  selector: 'app-total-projects-widget',
  standalone: true,
  imports: [
    LineMicroChartComponent
  ],
  templateUrl: './total-projects-widget.component.html',
  styleUrl: './total-projects-widget.component.scss'
})
export class TotalProjectsWidgetComponent {
  data = [47, 54, 38, 24, 65, 37];
}
