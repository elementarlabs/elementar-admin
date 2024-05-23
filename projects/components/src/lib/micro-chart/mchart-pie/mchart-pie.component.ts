import {
  AfterViewChecked, booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  inject,
  input, numberAttribute, OnChanges, OnDestroy,
  PLATFORM_ID, SimpleChanges
} from '@angular/core';
import { isPlatformServer } from '@angular/common';
import {
  arc,
  interpolate,
  pie,
  scaleOrdinal,
  schemeTableau10,
  select
} from 'd3';

@Component({
  selector: 'emr-mchart-pie',
  exportAs: 'emrMchartPie',
  standalone: true,
  imports: [],
  templateUrl: './mchart-pie.component.html',
  styleUrl: './mchart-pie.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'emr-mchart-pie'
  }
})
export class MchartPieComponent implements AfterViewChecked, OnChanges, OnDestroy {
  private _initialized = false;
  private _host: any;
  private _svg: any;
  private _dataContainer: any;
  private _legendContainer: any;
  private _dimensions: DOMRect;
  private _innerWidth = 0;
  private _innerHeight = 0;
  private _hostWidth = 0;
  private _hostHeight = 0;
  private _resizeObserver: ResizeObserver;
  private _platformId = inject(PLATFORM_ID);
  private _elementRef = inject(ElementRef);
  private _destroyRef = inject(DestroyRef);
  private _radius = 0;
  private _arcGenerator: any;
  private _pieGenerator: any;
  private _colorsGenerator: any;
  private _arcTweenGenerator: any;

  data = input<number[]>([]);
  labels = input<string[]>([]);
  colors = input<string[]>([]);
  valueAccessor = input((d: any) => d);
  legendContainerWidth = input(0, {
    transform: numberAttribute
  });
  showAnimation = input(false, {
    transform: booleanAttribute
  })

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
        this._setupResizeObserver();
      }
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!this._initialized) {
      return;
    }

    if (changes['data'] && !changes['data'].firstChange) {
      this._draw();
    }
  }

  ngOnDestroy() {
    this._resizeObserver?.disconnect();
  }

  private _render(): void {
    this._initDimensions();
    this._initContainers();
    this._setGenerators();
    this._draw();
  }

  private _initDimensions(): void {
    this._hostWidth = this._dimensions.width;
    this._hostHeight = this._dimensions.height;
    this._innerWidth = this._dimensions.width - this.legendContainerWidth();
    this._innerHeight = this._dimensions.height;
    this._host = select(this._elementRef.nativeElement);
    this._svg = this._host
      .select('svg')
      .attr('viewBox', `0 0 ${this._hostWidth} ${this._hostHeight}`)
    ;
    this._radius = Math.min(this._innerWidth, this._innerHeight) * .5;
  }

  private _initContainers(): void {
    this._dataContainer = this._svg
      .append('g')
      .attr('class', 'data-container')
      .attr('transform', `translate(${this._innerWidth * .5},${this._innerHeight * .5})`)
    ;
    this._legendContainer = this._svg
      .append('g')
      .attr('class', 'legend-container')
      .attr('transform', `translate(${this._innerWidth - .5 * this.legendContainerWidth()},${this._innerHeight * .5})`)
    ;
  }

  private _setGenerators(): void {
    const self = this;
    this._arcGenerator = arc()
      .innerRadius(0)
      .outerRadius(this._radius)
    ;
    this._pieGenerator = pie()
      .value(this.valueAccessor())
    ;
    this._colorsGenerator = scaleOrdinal(schemeTableau10)
      .domain(this.data().map((d: number, i: number) => i.toString()))
    ;
    this._arcTweenGenerator = function(d: number) {
        // @ts-ignore
        const _this = this as any;
        const current = d;
        const interpolateGenerator = interpolate(_this._previous, current);
        _this._previous = current;
        return (t: any) => {
          return self._arcGenerator(interpolateGenerator(t));
        };
      }
    ;
  }

  private _draw(): void {
    const data = this._pieGenerator(this.data());
    const self = this;
    this._dataContainer
      .selectAll('path.data')
      .data(data)
      .join('path')
      .attr('class', 'data')
      .attr('d', (d: number) => this._arcGenerator(d))
      .style('fill', (d: number, i: number) => this._colorsGenerator(i))
      .transition()
      .duration(this.showAnimation() ? 1000 : 0)
      .attrTween('d', this._arcTweenGenerator)
    ;
  }

  private _setupResizeObserver(): void {
    // if (!this.responsive()) {
    //   return;
    // }
    //
    // this._resizeObserver?.disconnect();
    // this._resizeObserver = new ResizeObserver((entries) => {
    //   if (this._hostWidth !== entries[0].contentRect.width || this._hostHeight !== entries[0].contentRect.height) {
    //     this._hostWidth = entries[0].contentRect.width;
    //     this._hostHeight = entries[0].contentRect.height;
    //     this._innerWidth = entries[0].contentRect.width;
    //     this._innerHeight = entries[0].contentRect.height;
    //     this._svg.attr('viewBox', `0 0 ${this._hostWidth} ${this._hostHeight}`);
    //     this._setupAxisScale();
    //     this._setupData();
    //   }
    // });
    // this._resizeObserver.observe(this._elementRef.nativeElement);
  }
}
