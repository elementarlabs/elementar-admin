import { afterNextRender, Component, ElementRef, inject, OnDestroy, ViewChild } from '@angular/core';

import * as echarts from 'echarts/core';
import { BarChart } from 'echarts/charts';

import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent
} from 'echarts/components';

import { LabelLayout, UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import { ThemeManagerService } from '@elementar/components';

echarts.use([
  BarChart,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer
]);

@Component({
  selector: 'app-echart-bar',
  standalone: true,
  imports: [],
  templateUrl: './echart-bar.chart.html',
  styleUrl: './echart-bar.chart.scss'
})
export class EchartBarChart implements OnDestroy {
  private _elementRef = inject(ElementRef);
  private _themeManager = inject(ThemeManagerService);
  private _observer: ResizeObserver;

  @ViewChild('chartRef', { static: true, read: ElementRef })
  private _chartRef: ElementRef;

  constructor() {
    afterNextRender(() => {
      const chart = echarts.init(this._chartRef.nativeElement, this._themeManager.getPreferredColorScheme());
      chart.setOption({
        tooltip: {
        },
        xAxis: {
          data: ['shirt', 'cardigan', 'chiffon', 'pants', 'heels', 'socks']
        },
        yAxis: {
        },
        series: [
          {
            name: 'sales',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      });
      this._observer = new ResizeObserver(() => chart.resize());
      this._observer.observe(this._elementRef.nativeElement);
    });
  }

  ngOnDestroy() {
    this._observer?.disconnect();
  }
}
