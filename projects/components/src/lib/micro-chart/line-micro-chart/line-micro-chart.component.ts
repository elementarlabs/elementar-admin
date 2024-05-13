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
  private _yScale: any;
  private _xScale: any;
  private _platformId = inject(PLATFORM_ID);

  private _canvas = viewChild<ElementRef>('canvas');

  maxCoefficient = 1;

  private _curveMap = {
    'linear': d3.curveLinear,
    'catmullRom': d3.curveCatmullRom
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
  curve = input<'linear' | 'catmullRom'>('linear');
  padding = input(0, {
    transform: numberAttribute
  });
  xScaleType = input<'category'|'time'>('category');
  xAccessor = input((d: any, i: number) => i);
  yAccessor = input((d: any) => d);
  yCompact = input(false, {
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
    this._setupData();
  }

  private _setupContainers(): void {
    if (this.xScaleType() === 'category') {
      this._xScale = d3.scaleBand();
    } else if (this.xScaleType() === 'time') {
      this._xScale = d3.scaleTime();
    }

    this._yScale = d3.scaleLinear();
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
    const xAccessor = this.xAccessor();
    const yAccessor = this.yAccessor();

    if (this.xScaleType() === 'category') {
      const xDomain = this.data().map((d: any, i: number) => xAccessor(d, i));
      this._xScale = this._xScale
        .domain(xDomain)
        .range([0, this._innerWidth])
      ;
    } else if (this.xScaleType() === 'time') {
      const xDomain = d3.extent(this.data(), xAccessor) as any;
      this._xScale = this._xScale
        .domain(xDomain)
        .range([0, this._innerWidth])
      ;
    }

    const yDomain = [
      this.yCompact() ? d3.min(this.data().map(d => yAccessor(d))) : 0,
      d3.max(this.data().map(d => yAccessor(d)))
    ];
    this._yScale = this._yScale
      .domain(yDomain)
      .range([this._innerHeight, 0])
    ;

    if (this.showArea()) {
      const areaGenerator = d3.area()
        .x((d, i) => this._xScale(xAccessor(d, i)))
        .y1((d) => this._yScale(yAccessor(d)))
        .y0(this._innerHeight)
        .curve(this._curveMap[this.curve()])
      ;
      const area = this._svg
        .append('path')
        .datum(this.data())
        .attr('d', areaGenerator)
        .attr('class', 'area')
      ;
    }

    const lineGenerator = d3.line()
      .x((d, i) => this._xScale(xAccessor(d, i)))
      .y((d) => this._yScale(yAccessor(d)) - this.strokeWidth() / 2)
    ;

    const line = this._svg
      .append('path')
      .datum(this.data())
      .attr('d', lineGenerator.curve(this._curveMap[this.curve()]))
      .attr('class', 'line')
      .attr('stroke-width', this.strokeWidth())
    ;


    //
    // if (this.showAnglePoints()) {
    //   const symbols = d3.symbol()
    //     .type(d => d3.symbolCircle)
    //     .size(((d, i) => i === 0 || i === (this.data().length - 1) ? 0 : 32))
    //   ;
    //   areaGroup
    //     .selectAll('path')
    //     .data(datum)
    //     .enter()
    //     .append('path')
    //     .attr('d', symbols)
    //     .attr('stroke', 'blue')
    //     .attr('stroke-width', this.strokeWidth())
    //     .attr('fill', 'white')
    //     .attr('transform', (d: any) => `translate(${this._x(d[0])},${this._y(d[1])})`)
    //   ;
    // }
  }
}
