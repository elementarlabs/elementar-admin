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
    'class': 'emr-mchart-pie',
    '[class.hover-animation]': 'showHoverAnimation()',
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
  labels = input<string[] | number[]>([]);
  valueAccessor = input((d: any) => d);
  legendContainerWidth = input(0, {
    transform: numberAttribute
  });
  showDataAnimation = input(false, {
    transform: booleanAttribute
  });
  showHoverAnimation = input(false, {
    transform: booleanAttribute
  });
  legendOffset = input(20, {
    transform: numberAttribute
  });
  legendItemHeight = input(30, {
    transform: numberAttribute
  });
  legendItemSymbolSize = input(12, {
    transform: numberAttribute
  });
  legendItemFontSize = input(14, {
    transform: numberAttribute
  });
  legendItemSymbolBorderRadius = input(12, {
    transform: numberAttribute
  });

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
      this._draw(true);
    }
  }

  ngOnDestroy() {
    this._resizeObserver?.disconnect();
  }

  private _render(): void {
    this._initDimensions();
    this._initContainers();
    this._setGenerators();
    this._setLegend();
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

  private _setLegend(): void {
    this._legendContainer
      .selectAll('g.legend-item')
      .data(this.data())
      .join('g')
      .attr('class', 'legend-item')
      .attr('data-index', (d: number, i: number) => i)
      .attr('transform', (d: number, i: number) => `translate(0, ${i * this.legendItemHeight()})`)
      .on('mouseenter', (event: MouseEvent, d: number) => {
        const target = event.target as HTMLElement;
        const index = +(target.getAttribute('data-index') as string);
        this._dataContainer
          .select(`path.data[data-index="${index}"]`)
          .classed('active', true)
        ;
      })
      .on('mouseleave', (event: MouseEvent, d: number) => {
        const target = event.target as HTMLElement;
        const index = +(target.getAttribute('data-index') as string);
        this._dataContainer
          .select(`path.data[data-index="${index}"]`)
          .classed('active', false)
        ;
      })
    ;
    this._legendContainer
      .selectAll('g.legend-item')
      .selectAll('text')
      .data((d: number, i: number) => [i])
      .join('text')
      .attr('class', 'legend-item-text')
      .attr('x', this.legendItemSymbolSize() * 2)
      .attr('y', this.legendItemHeight() * .5)
      .attr('font-size', this.legendItemFontSize())
      .text((i: number) => this.labels()[i])
    ;
    this._legendContainer
      .selectAll('g.legend-item')
      .selectAll('rect')
      .data((d: number, i: number) => [i])
      .join('rect')
      .attr('class', 'legend-item-symbol')
      .attr('rx', this.legendItemSymbolBorderRadius())
      .attr('width', this.legendItemSymbolSize())
      .attr('height', this.legendItemSymbolSize())
      .attr('fill', (i: number) => this._colorsGenerator(i))
      .attr('y', this.legendItemFontSize() * .5 - 2)
    ;
    const dimensions = this._legendContainer.node().getBBox();
    this._legendContainer.attr(
      'transform',
      `translate(${this._innerWidth + this.legendOffset()},${this._innerHeight * .5 - .5 * dimensions.height})`
    )
  }

  private _draw(isUpdate = false): void {
    if (isUpdate) {
      this._colorsGenerator
        .domain(this.data().map((d: number, i: number) => i.toString()))
      ;
    }

    const data = this._pieGenerator(this.data());
    this._dataContainer
      .selectAll('path.data')
      .data(data)
      .join('path')
      .attr('class', 'data')
      .attr('d', (d: number) => this._arcGenerator(d))
      .style('fill', (d: number, i: number) => this._colorsGenerator(i))
      .attr('data-index', (d: number, i: number) => i)
      .transition()
      .duration(this.showDataAnimation() ? 1000 : 0)
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
