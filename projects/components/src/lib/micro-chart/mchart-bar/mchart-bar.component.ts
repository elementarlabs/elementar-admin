import {
  AfterViewChecked,
  Component,
  effect,
  ElementRef,
  inject,
  input,
  numberAttribute,
  PLATFORM_ID
} from '@angular/core';
import { isPlatformServer } from '@angular/common';
import * as d3 from 'd3';

@Component({
  selector: 'emr-mchart-bar',
  exportAs: 'emrMchartBar',
  standalone: true,
  imports: [],
  templateUrl: './mchart-bar.component.html',
  styleUrl: './mchart-bar.component.scss',
  host: {
    'class': 'emr-mchart-bar'
  }
})
export class MchartBarComponent implements AfterViewChecked {
  private _initialized = false;
  private _host: any;
  private _svg: any;
  private _dataContainer: any;
  private _dimensions: DOMRect;
  private _innerWidth = 0;
  private _innerHeight = 0;
  private _xScale: any;
  private _yScale: any;
  private _platformId = inject(PLATFORM_ID);
  private _elementRef = inject(ElementRef);

  maxCoefficient = 1;

  data = input<number[]>([]);
  labels = input<string[]>([]);
  gap = input(0.2, {
    transform: numberAttribute
  });
  radius = input(0, {
    transform: numberAttribute
  });
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
    this._setupAxisScale();
    this._setupData();
  }

  private _setupContainers(): void {
    this._innerWidth = this._dimensions.width;
    this._innerHeight = this._dimensions.height;
    this._host = d3.select(this._elementRef.nativeElement);
    this._svg = this._host.select('svg');
    this._dataContainer = this._svg.append('g')
      .attr('class', 'data-container')
      .attr('transform', `translate(0,0)`)
    ;
  }

  private _setupAxisScale(): void {
    this._xScale = d3.scaleBand()
      .paddingInner(this.gap())
      .paddingOuter(this.padding())
      .domain(this.data().map((d, i) => i.toString()))
      .range([0, this._innerWidth])
    ;
    const max = this.maxCoefficient * Math.max(...this.data());
    this._yScale = d3.scaleLinear()
      .domain([0, max])
      .range([this._innerHeight, 0])
    ;
  }

  private _setupData(): void {
    this._dataContainer.selectAll('rect')
      .data(this.data())
      .enter()
      .append('rect')
      .attr('rx', this.radius())
      .attr('x', (d: any, i: number) => this._xScale(i.toString()))
      .attr('y', (d: any) => this._yScale(d))
      .attr('width', this._xScale.bandwidth())
      .attr('height', (d: any) => this._innerHeight - this._yScale(d))
      .attr('class', 'bar')
    ;
  }
}
