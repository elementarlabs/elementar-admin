import {
  AfterContentInit,
  afterNextRender, AfterViewChecked, AfterViewInit, ChangeDetectorRef,
  Component, effect,
  ElementRef, inject,
  input,
  numberAttribute,
  OnInit, PLATFORM_ID, Renderer2, viewChild
} from '@angular/core';
import { isPlatformServer } from '@angular/common';
import * as d3 from 'd3';

@Component({
  selector: 'emr-area-line-chart',
  exportAs: 'emrAreaLineChart',
  standalone: true,
  imports: [
  ],
  templateUrl: './area-line-chart.component.html',
  styleUrl: './area-line-chart.component.scss'
})
export class AreaLineChartComponent implements AfterViewChecked {
  data = input.required<number[]>();
  strokeWidth = input(3, {
    transform: numberAttribute
  });
  svg: any;

  private _elementRef = inject(ElementRef);
  protected _initialized = false;
  private _host: any;

  colWidth = 20;
  padding = 5;

  constructor() {
    this._host = d3.select(this._elementRef.nativeElement);
  }

  ngAfterViewChecked() {
    const element = this._elementRef.nativeElement as HTMLElement;

    if (!this._initialized && element.getBoundingClientRect().width > 0) {
      this._initialized = true;
      this._render();
    }
  }

  private _render(): void {
    this.svg = this._host.select('svg');
    this.svg
      .selectAll('rect')
      .data([10, 20, 30])
      .enter()
      .append('rect')
      .attr('x', (d: any, i: number) => {
        return i * (this.colWidth + this.padding);
      })
      .attr('width', this.colWidth)
      .attr('height', (d: any) => d)
    ;
  }
}
