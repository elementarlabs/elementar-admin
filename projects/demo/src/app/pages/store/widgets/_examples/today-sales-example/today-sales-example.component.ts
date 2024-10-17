import { Component } from '@angular/core';
import { TodaySalesWidgetComponent } from '@elementar/store/widgets';

@Component({
  selector: 'app-today-sales-example',
  standalone: true,
  imports: [
    TodaySalesWidgetComponent
  ],
  templateUrl: './today-sales-example.component.html',
  styleUrl: './today-sales-example.component.scss'
})
export class TodaySalesExampleComponent {

}
