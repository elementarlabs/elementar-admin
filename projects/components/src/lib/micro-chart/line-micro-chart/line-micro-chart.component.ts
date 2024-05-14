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
    'catmullRom': d3.curveCatmullRom,
    'curveBumpX': d3.curveBumpX
  }

  data = input<number[]>([]);
  strokeWidth = input(2, {
    transform: numberAttribute
  });
  showArea = input(false, {
    transform: booleanAttribute
  });
  showMarkers = input(false, {
    transform: booleanAttribute
  });
  curve = input<'linear' | 'catmullRom' | 'curveBumpX'>('linear');
  padding = input(0, {
    transform: numberAttribute
  });
  xScaleType = input<'category'|'time'>('category');
  xAccessor = input((d: any, i: number) => i);
  yAccessor = input((d: any) => d);
  yCompact = input(false, {
    transform: booleanAttribute
  });
  markerDotSize = input(5, {
    transform: numberAttribute
  });
  markerLineWidth = input(1, {
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
    this._yScale = d3.scaleLinear();
    this._innerWidth = this._dimensions.width;
    this._innerHeight = this._dimensions.height;
    this._host = d3.select(this._elementRef.nativeElement);
    this._svg = this._host.select('svg')
      .attr('width', this._dimensions.width)
      .attr('height', this._dimensions.height)
      .attr("viewBox", `0 0 ${this._dimensions.width} ${this._dimensions.height}`)
    ;
    this._dataContainer = this._svg.append('g')
      .attr('class', 'data-container')
      .attr('transform', `translate(0,0)`)
    ;
  }

  private _setupData(): void {
    const xAccessor = this.xAccessor();
    const yAccessor = this.yAccessor();
    const dataValue = this.data().map((d) => yAccessor(d));
    const dataMinValue = Math.min(...dataValue);
    const dataMaxValue = Math.max(...dataValue);

    if (this.xScaleType() === 'category') {
      const xDomain = this.data().map((d: any, i: number) => xAccessor(d, i)) as any;
      this._xScale = d3.scalePoint(xDomain, [this.markerDotSize(), this._innerWidth - this.markerDotSize()]);
    } else if (this.xScaleType() === 'time') {
      const xDomain = d3.extent(this.data(), xAccessor) as any;
      this._xScale = d3.scaleTime(xDomain, [this.markerDotSize(), this._innerWidth - this.markerDotSize()]);
    }

    const yDomain = [
      this.yCompact() ? d3.min(this.data().map(d => yAccessor(d))) : 0,
      d3.max(this.data().map(d => yAccessor(d)))
    ];
    this._yScale = this._yScale
      .domain(yDomain)
      .range([this._innerHeight - this.markerDotSize(), this.markerDotSize()])
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
      .y((d) => {
        const value = yAccessor(d);

        if (value === dataMinValue) {
          return this._yScale(yAccessor(d)) - this.strokeWidth() / 2;
        } else if (value === dataMaxValue) {
          return this._yScale(yAccessor(d)) + this.strokeWidth() / 2;
        }

        return this._yScale(yAccessor(d));
      })
    ;

    const line = this._svg
      .append('path')
      .datum(this.data())
      .attr('d', lineGenerator.curve(this._curveMap[this.curve()]))
      .attr('class', 'line')
      .attr('stroke-width', this.strokeWidth())
    ;

    const markerLine = this._svg
      .append('line')
      .attr('x1', 0)
      .attr('x2', 0)
      .attr('y1', 0)
      .attr('y2', this._innerHeight)
      .attr('stroke-width', this.markerLineWidth())
      .attr('opacity', 0)
      .attr('class', 'marker-line')
    ;

    const markerDot = this._svg
      .append('circle')
      .attr('cx', 0)
      .attr('cy', 0)
      .attr('r', this.markerDotSize())
      .attr('opacity', 0)
      .attr('class', 'marker-dot')
    ;

    let x = 0;
    let y = 0;

    this._svg.on('mousemove', (e: any) => {
      const pointerCoords = d3.pointer(e);
      const [posX, posY] = pointerCoords;

      if (this.xScaleType() === 'category') {
        const eachBand = this._xScale.step();
        const index = Math.round((posX / eachBand));
        const dataValue = this.data()[index];
        x = this._xScale(xAccessor(index, index));
        y = this._yScale(yAccessor(dataValue));
      } else if (this.xScaleType() === 'time') {
        // const bisect = d3.bisector(xAccessor);
        // const index = bisect.center(this.data(), this._xScale.invert(posX));
        // const val = this.data()[index];
      }

      markerLine
        .attr('x1', x)
        .attr('x2', x)
        .attr('opacity', 1)
      ;
      markerDot
        .attr('cx', x)
        .attr('cy', y)
        .attr('opacity', 1)
      ;
    });
  }
}
