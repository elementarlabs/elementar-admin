import { afterNextRender, Component, ElementRef, inject, OnDestroy, ViewChild } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatRipple } from '@angular/material/core';
import { MatTooltip } from '@angular/material/tooltip';
import * as echarts from 'echarts/core';
import { LineChart } from 'echarts/charts';
import {
  DatasetComponent,
  GridComponent, LegendComponent,
  TitleComponent, ToolboxComponent,
  TooltipComponent,
  TransformComponent
} from 'echarts/components';
import { LabelLayout, UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import { ThemeManagerService } from '@elementar/components/core';

@Component({
  selector: 'app-purchases-by-channels-widget',
  standalone: true,
  imports: [
    MatIcon,
    MatRipple,
    MatTooltip
  ],
  templateUrl: './purchases-by-channels-widget.component.html',
  styleUrl: './purchases-by-channels-widget.component.scss'
})
export class PurchasesByChannelsWidgetComponent implements OnDestroy {
  private _elementRef = inject(ElementRef);
  private _themeManager = inject(ThemeManagerService);
  private _observer: ResizeObserver;

  @ViewChild('chartRef', { read: ElementRef, static: true })
  private _chartRef: ElementRef;

  constructor() {
    afterNextRender(() => {
      const startDate = new Date();
      startDate.setDate(startDate.getDate() - 3);
      const endDate = new Date();
      endDate.setTime(startDate.getTime());
      endDate.setDate(endDate.getDate() + 6);
      const dateRange = this.getDatesRange(startDate, endDate);
      const categoryData = dateRange.map(date => date.getDate() + ' ' + date.toLocaleString('default', { month: 'short' }));

      echarts.use([
        ToolboxComponent,
        TitleComponent,
        TooltipComponent,
        LegendComponent,
        GridComponent,
        DatasetComponent,
        TransformComponent,
        LabelLayout,
        LineChart,
        UniversalTransition,
        CanvasRenderer
      ]);
      const option = {
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['Direct', 'Organic', 'Social']
        },
        grid: {
          top: '44px',
          left: '30px',
          right: '34px',
          bottom: '30px',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: categoryData
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: 'Direct',
            type: 'line',
            stack: 'Total',
            data: [120, 132, 101, 30, 100, 66, 100]
          },
          {
            name: 'Organic',
            type: 'line',
            stack: 'Total',
            data: [220, 182, 191, 200, 220, 180, 160]
          },
          {
            name: 'Social',
            type: 'line',
            stack: 'Total',
            data: [150, 232, 201, 160, 140, 190, 230]
          }
        ]
      };
      const chart = echarts.init(this._chartRef.nativeElement, this._themeManager.getPreferredColorScheme());
      chart.setOption(option);
      this._observer = new ResizeObserver(() => chart.resize());
      this._observer.observe(this._elementRef.nativeElement);
    });
  }

  ngOnDestroy() {
    this._observer?.disconnect();
  }

  getDatesRange(startDate: Date, endDate: Date) {
    const dates = [];
    const currentDate = startDate;

    while (currentDate < endDate) {
      dates.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }

    dates.push(endDate);
    return dates;
  }
}
