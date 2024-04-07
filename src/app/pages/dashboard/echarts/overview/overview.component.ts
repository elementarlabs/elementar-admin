import { Component } from '@angular/core';
import { EchartBarChart } from '../_widgets/echart-bar/echart-bar.chart';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [
    EchartBarChart
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
