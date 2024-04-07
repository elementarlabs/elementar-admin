import { Component, ElementRef, inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { isPlatformServer } from '@angular/common';
import ApexCharts from 'apexcharts';

@Component({
  selector: 'app-total-projects-widget',
  standalone: true,
  imports: [],
  templateUrl: './total-projects-widget.component.html',
  styleUrl: './total-projects-widget.component.scss'
})
export class TotalProjectsWidgetComponent {
  private _platformId = inject(PLATFORM_ID);

  @ViewChild('chartEl', { static: true })
  private _chartEl: ElementRef;

  sparklineData = [
    47, 54, 38, 24, 65, 37
  ];
  options = {
    chart: {
      id: 'projects',
      group: 'sparklines',
      type: 'area',
      height: 146,
      sparkline: {
        enabled: true
      },
    },
    stroke: {
      width: 3,
      curve: 'smooth'
    },
    fill: {
      opacity: 1,
      colors: ['#fde68a']
    },
    series: [{
      name: 'Projects',
      data: this._randomizeArray(this.sparklineData)
    }],
    labels: [...Array(6).keys()].map(n => `2024-02-0${n+1}`),
    yaxis: {
      min: 0
    },
    xaxis: {
      type: 'datetime',
    },
    colors: ['#f59e0b'],
    grid: {
      padding: {
        right: 0,
        left: 0
      }
    },
    dataLabels: {
      enabled: false
    }
  };

  private _randomizeArray(arg: any) {
    let array = arg.slice();
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  ngOnInit() {
    if (isPlatformServer(this._platformId)) {
      return;
    }

    (new ApexCharts(this._chartEl.nativeElement, this.options)).render();
  }
}
