import { afterNextRender, Component, ElementRef, Input, numberAttribute, OnInit, ViewChild } from '@angular/core';
import { SVG } from '@svgdotjs/svg.js';

@Component({
  selector: 'emr-area-line-chart',
  exportAs: 'emrAreaLineChart',
  standalone: true,
  imports: [
  ],
  templateUrl: './area-line-chart.component.html',
  styleUrl: './area-line-chart.component.scss'
})
export class AreaLineChartComponent implements OnInit {
  @ViewChild('chartRef', { read: ElementRef, static: true })
  private _chartRef: ElementRef;

  @Input({ transform: numberAttribute })
  width: number = 200;

  @Input({ transform: numberAttribute })
  height: number = 80;

  @Input()
  data: number[] = [];

  @Input({ transform: numberAttribute })
  strokeWidth: number = 3;

  constructor() {
    afterNextRender(() => {
      if (this.data.length === 0) {
        return;
      }

      this._render();
    });
  }

  ngOnInit() {
  }

  private _render() {
    const xStep = this.width / (this.data.length - 1);
    const max = Math.max(...this.data);
    const pathArray: string[] = [];
    const pathLines: string[] = [];
    this.data.forEach((val, index) => {
      const x = xStep * index;
      const y = (this.height - this.strokeWidth) * (val / max);

      if (index === 0) {
        pathArray.push('M ' + x + ' ' + y);
      } else if (index + 1 === this.data.length) {
        pathArray.push(' L ' + (x - this.strokeWidth) + ' ' + y);
      } else {
        pathArray.push(' L ' + x + ' ' + y);
      }
    });

    console.log(pathArray.join(''));

    const draw = SVG()
      .addTo(this._chartRef.nativeElement)
      .size(this.width, this.height)
    ;
    draw.addClass('emr-area-line-chart');
    const path = draw.path(pathArray.join(''));
    path.fill('none').move(this.strokeWidth / 2, this.strokeWidth / 2);
    path.stroke({ color: '#f06', width: this.strokeWidth, linecap: 'round', linejoin: 'round' });
  }
}
