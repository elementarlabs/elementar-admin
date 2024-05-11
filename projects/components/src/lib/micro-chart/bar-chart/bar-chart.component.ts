import {
  AfterViewChecked, booleanAttribute,
  Component,
  effect,
  ElementRef,
  inject,
  input, numberAttribute,
  PLATFORM_ID,
} from '@angular/core';
import * as d3 from 'd3';
import { isPlatformServer } from '@angular/common';

@Component({
  selector: 'emr-bar-chart',
  exportAs: 'emrBarChart',
  standalone: true,
  imports: [],
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.scss'
})
export class BarChartComponent implements AfterViewChecked {
  private _elementRef = inject(ElementRef);
  private _initialized = false;
  private _host: any;
  private _svg: any;
  private _dataContainer: any;
  private _xAxisContainer: any;
  private _xAxis: any;
  private _yAxisContainer: any;
  private _yAxis: any;
  private _dimensions: DOMRect;
  private _innerWidth = 0;
  private _innerHeight = 0;
  private _y: any;
  private _x: any;
  private _platformId = inject(PLATFORM_ID);

  maxCoefficient = 1;

  data = input<number[]>([]);
  domain = input<string[]>([]);
  columnPaddingInner = input(0.2, {
    transform: numberAttribute
  });
  columnsPaddingOuter = input(0, {
    transform: numberAttribute
  });
  colBorderRadius = input(10, {
    transform: numberAttribute
  });
  yAxisTicksCount = input(0, {
    transform: numberAttribute
  });
  marginStart = input(0, {
    transform: numberAttribute
  });
  marginEnd = input(0, {
    transform: numberAttribute
  });
  marginTop = input(0, {
    transform: numberAttribute
  });
  marginBottom = input(0, {
    transform: numberAttribute
  });
  tickPadding = input(3, {
    transform: numberAttribute
  });
  yAxisPosition = input<'start' | 'end'>('start');

  showYAxis = input(false, {
    transform: booleanAttribute
  });
  showXAxis = input(false, {
    transform: booleanAttribute
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
    this._setupAxis();
    this._setupData();
  }

  private _setupContainers(): void {
    this._y = d3.scaleLinear();
    this._x = d3.scaleBand()
      .paddingInner(this.columnPaddingInner())
      .paddingOuter(this.columnsPaddingOuter())
    ;
    this._innerWidth = this._dimensions.width - this.marginStart() - this.marginEnd();
    this._innerHeight = this._dimensions.height - this.marginTop() - this.marginBottom();
    this._host = d3.select(this._elementRef.nativeElement);
    this._svg = this._host.select('svg');
    this._xAxisContainer = this._svg.append('g')
      .attr('class', 'x-axis-container')
      .attr('transform', `translate(${this.marginStart()},${this.marginTop() + this._innerHeight})`)
    ;
    this._yAxisContainer = this._svg.append('g')
      .attr('class', 'y-axis-container')
    ;

    if (this.yAxisPosition() === 'start') {
      this._yAxisContainer = this._yAxisContainer
        .attr('transform', `translate(${this.marginStart()},${this.marginTop()})`)
      ;
    } else if (this.yAxisPosition() === 'end') {
      this._yAxisContainer = this._yAxisContainer
        .attr('transform', `translate(${this.marginStart() + this._innerWidth}, ${this.marginTop()})`)
      ;
    }

    this._dataContainer = this._svg.append('g')
      .attr('class', 'data-container')
      .attr('transform', `translate(${this.marginStart()},${this.marginTop()})`)
    ;
  }

  private _setupAxis(): void {
    this._x
      .domain(this.data().map((d, i) => i.toString()))
      .range([0, this._innerWidth])
    ;
    const max = this.maxCoefficient * Math.max(...this.data());
    this._y
      .domain([0, max])
      .range([this._innerHeight, 0])
    ;

    if (this.showXAxis()) {
      if (this.domain().length !== this.data().length) {
        throw new Error('You need to define a domain property and the domain property data length should be equals to the data length');
      }

      this._xAxis = d3.axisBottom(this._x)
        .tickSizeOuter(0)
        .tickPadding(this.tickPadding())
      ;
      this._xAxisContainer.call(this._xAxis);
      this._xAxisContainer
        .selectAll('.tick line')
        .attr('class', 'tick-line x-tick-line')
      ;
      this._xAxisContainer
        .selectAll('.tick text')
        .attr('class', 'tick-text x-tick-text')
        .text((d: any, i: number) => this.domain()[i])
      ;
    }

    if (this.showYAxis()) {
      if (this.yAxisPosition() === 'start') {
        this._yAxis = d3.axisLeft(this._y);
      } else if (this.yAxisPosition() === 'end') {
        this._yAxis = d3.axisRight(this._y);
      }

      if (this.yAxisTicksCount() > 0) {
        this._yAxis = this._yAxis.ticks(this.yAxisTicksCount());
      }

      this._yAxis = this._yAxis
        .tickSizeOuter(0)
        .tickPadding(this.tickPadding())
      ;

      this._yAxisContainer.call(this._yAxis);
      this._yAxisContainer
        .selectAll('.tick line')
        .attr('class', 'tick-line y-tick-line')
      ;
      this._yAxisContainer
        .selectAll('.tick text')
        .attr('class', 'tick-text y-tick-text')
      ;
    }
  }

  private _setupData(): void {
    this._dataContainer.selectAll('rect')
      .data(this.data())
      .enter()
      .append('rect')
      .attr('rx', this.colBorderRadius())
      .attr('x', (d: any, i: number) => this._x(i.toString()))
      .attr('y', (d: any) => this._y(d))
      .attr('width', this._x.bandwidth())
      .attr('height', (d: any) => this._innerHeight - this._y(d))
    ;
  }
}
