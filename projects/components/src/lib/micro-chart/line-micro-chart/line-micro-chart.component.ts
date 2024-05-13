import {
  booleanAttribute,
  Component,
  effect,
  ElementRef,
  inject,
  input,
  numberAttribute,
  PLATFORM_ID, Signal, viewChild
} from '@angular/core';
import { isPlatformServer } from '@angular/common';
import * as d3 from 'd3';
import { AxisTickFormatFn } from '../types';

@Component({
  selector: 'emr-line-micro-chart',
  standalone: true,
  imports: [],
  templateUrl: './line-micro-chart.component.html',
  styleUrl: './line-micro-chart.component.scss'
})
export class LineMicroChartComponent {
  private _elementRef = inject(ElementRef);
  private _initialized = false;
  private _host: any;
  private _svg: any;
  private _dataContainer: any;
  private _dimensions: DOMRect;
  private _innerWidth = 0;
  private _innerHeight = 0;
  private _y: any;
  private _x: any;
  private _platformId = inject(PLATFORM_ID);

  private _canvas = viewChild<ElementRef>('canvas');

  maxCoefficient = 1;

  private _curveMap = {
    'linear': d3.curveLinear,
    'natural': d3.curveCatmullRom
  }

  data = input<number[]>([]);
  strokeWidth = input(2, {
    transform: numberAttribute
  });
  showArea = input(false, {
    transform: booleanAttribute
  });
  showAnglePoints = input(false, {
    transform: booleanAttribute
  });
  curve = input<'linear' | 'natural'>('linear');
  padding = input(0, {
    transform: numberAttribute
  });

  constructor() {
    effect(() => {
      if (!this._initialized) {
        return;
      }

      this._render();
    });
  }

  ngAfterViewChecked() {
    if (isPlatformServer(this._platformId)) {
      return;
    }

    if (!this._initialized) {
      const element = this._elementRef.nativeElement as HTMLElement;
      this._dimensions = element.getBoundingClientRect();

      if (this._dimensions.width !== 0 && this._dimensions.height !==0) {
        this._initialized = true;
        this._render();
      }
    }
  }

  private _render(): void {
    this._setupContainers();
    this._setupData();
  }

  private _setupContainers(): void {
    this._y = d3.scaleLinear();
    this._x = d3.scaleBand().padding(this.padding());
    this._innerWidth = this._dimensions.width;
    this._innerHeight = this._dimensions.height;
    this._host = d3.select(this._elementRef.nativeElement);
    this._svg = this._host.select('svg');
    this._dataContainer = this._svg.append('g')
      .attr('class', 'data-container')
      .attr('transform', `translate(0,0)`)
    ;
  }

  private _setupData(): void {
    const xStep = Math.ceil(this._innerWidth / this.data().length);
    this._x
      .domain(d3.range(0, this.data().length))
      .range([0, this._innerWidth + xStep + this.strokeWidth()])
    ;
    const minMax = d3.extent(this.data()) as any;
    this._y
      .domain(minMax)
      .range([this._innerHeight, 0])
    ;
    const line = d3
      .line()
      .x((d: any, index: number) => this._x(d[0]))
      .y(d => this._y(d[1]))
    ;
    const datum = this.data().map((d: number, index: number) => {
      return [index, d];
    });

    const areaGroup = this._svg
      .append('g')
      .attr('transform', `translate(0,0)`)
    ;

    if (this.showArea()) {
      const area = d3
        .area()
        .x((d: any) => this._x(d[0]))
        .y0(this._innerHeight)
        .y1((d: any) => this._y(d[1]))
        .curve(this._curveMap[this.curve()])
      ;
      areaGroup
        .append('path')
        .datum(datum)
        .attr('d', area)
        .attr('class', 'area')
      ;
    }

    this._dataContainer
      .append('path')
      .datum(datum)
      .attr('d', line.curve(this._curveMap[this.curve()]))
      .attr('stroke-width', this.strokeWidth())
      .attr('class', 'line')
    ;

    if (this.showAnglePoints()) {
      const symbols = d3.symbol()
        .type(d => d3.symbolCircle)
        .size(((d, i) => i === 0 || i === (this.data().length - 1) ? 0 : 32))
      ;
      areaGroup
        .selectAll('path')
        .data(datum)
        .enter()
        .append('path')
        .attr('d', symbols)
        .attr('stroke', 'blue')
        .attr('stroke-width', this.strokeWidth())
        .attr('fill', 'white')
        .attr('transform', (d: any) => `translate(${this._x(d[0])},${this._y(d[1])})`)
      ;
    }
  }
}
