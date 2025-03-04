import {
  AfterViewChecked, booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  input, numberAttribute, OnChanges, OnDestroy,
  PLATFORM_ID, SimpleChanges, TemplateRef
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
import { OverlayPosition } from '@elementar-ui/components/overlay';
import { BaseChartTooltip } from '../base-chart.tooltip';

@Component({
  selector: 'emr-mchart-pie',
  exportAs: 'emrMchartPie',
  templateUrl: './mchart-pie.component.html',
  styleUrl: './mchart-pie.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'emr-mchart-pie'
  }
})
export class MchartPieComponent extends BaseChartTooltip implements AfterViewChecked, OnChanges, OnDestroy {
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
  private _radius = 0;
  private _arcGenerator: any;
  private _pieGenerator: any;
  private _colorsGenerator: any;
  private _arcTweenGenerator: any;
  private _pieData: any;

  data = input<number[]>([]);
  labels = input<string[] | number[]>([]);
  valueAccessor = input((d: any) => d);
  dataItemStrokeWidth = input(1, {
    transform: numberAttribute
  });
  legendContainerWidth = input(0, {
    transform: numberAttribute
  });
  showDataAnimation = input(false, {
    transform: booleanAttribute
  });
  showValueOnSlices = input(false, {
    transform: booleanAttribute
  });
  showLegend = input(false, {
    transform: booleanAttribute
  });
  legendOffset = input(30, {
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
  valueFontSize = input(12, {
    transform: numberAttribute
  });
  tooltip = input<TemplateRef<unknown>>();
  tooltipPosition = input<OverlayPosition>('after-center');

  getTooltipPosition(): OverlayPosition {
    return this.tooltipPosition();
  }

  getTooltipTemplateRef(): TemplateRef<any> | undefined {
    return this.tooltip();
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
    this._initTooltip();
  }

  private _initDimensions(): void {
    const legendContainerWidth = this.showLegend() ? this.legendContainerWidth() : 0;
    this._hostWidth = this._dimensions.width;
    this._hostHeight = this._dimensions.height;
    this._innerWidth = this._dimensions.width - legendContainerWidth - this.dataItemStrokeWidth() * 2;
    this._innerHeight = this._dimensions.height - this.dataItemStrokeWidth() * 2;
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
      .attr('transform', `translate(${this._radius},${this._innerHeight * .5})`)
    ;

    if (this.showLegend()) {
      this._legendContainer = this._svg
        .append('g')
        .attr('class', 'legend-container')
      ;
    }
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
    if (!this.showLegend()) {
      return;
    }

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
          .select(`path.data-item[data-index="${index}"]`)
          .classed('active', true)
        ;
      })
      .on('mouseleave', (event: MouseEvent, d: number) => {
        const target = event.target as HTMLElement;
        const index = +(target.getAttribute('data-index') as string);
        this._dataContainer
          .select(`path.data-item[data-index="${index}"]`)
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
      `translate(${this._radius * 2 + this.legendOffset()},${this._innerHeight * .5 - .5 * dimensions.height})`
    )
  }

  private _draw(isUpdate = false): void {
    if (isUpdate) {
      this._colorsGenerator
        .domain(this.data().map((d: number, i: number) => i.toString()))
      ;
    }

    this._pieData = this._pieGenerator(this.data());
    this._dataContainer
      .selectAll('g.data-item-group')
      .data(this.data())
      .join('g')
      .attr('class', 'data-item-group')
      .attr('data-index', (d: number, i: number) => i)
    ;
    this._dataContainer
      .selectAll('g.data-item-group')
      .selectAll('path')
      .data((d: number, i: number) => [this._pieData[i]])
      .join('path')
      .attr('class', 'data-item')
      .attr('stroke-width', this.dataItemStrokeWidth())
      .attr('d', (d: any) => this._arcGenerator(d))
      .style('fill', (d: any) => this._colorsGenerator(d.index))
      .attr('data-index', (d: any) => d.index)
      .transition()
      .duration(this.showDataAnimation() ? 1000 : 0)
      .attrTween('d', this._arcTweenGenerator)
    ;

    if (this.showValueOnSlices()) {
      this._dataContainer
        .selectAll('g.data-item-group')
        .selectAll('text')
        .data((d: number, i: number) => [this._pieData[i]])
        .join('text')
        .attr('class', 'value')
        .attr('font-size', this.valueFontSize())
        .attr('transform', (d: any) => {
          const coordinates = this._arcGenerator.centroid(d);
          return `translate(${coordinates[0]},${coordinates[1]})`;
        })
        .text((d: any) => d.data)
      ;
    }
  }

  private _setupResizeObserver(): void {
  }

  private _initTooltip(): void {
    if (!this.tooltip()) {
      return;
    }

    let oldValue: number;
    this._createTooltipOrigin();
    this._dataContainer
      .selectAll('g.data-item-group')
      .data(this._pieData)
      .on('mousemove', (event: MouseEvent, d: any) => {
        const target = event.target as HTMLElement;
        this._setTooltipPositionByEvent(event);
        this._setTooltipVisible();

        const index = +(target.getAttribute('data-index') as string);
        const label = this.labels()[index] ? this.labels()[index] : null;
        const color = this._colorsGenerator(index);
        const value = d.data;

        if (!this._overlayRef?.hasAttached()) {
          this._showTooltip({
            label,
            color,
            value
          });
          oldValue = value;
        } else {
          if (oldValue !== d.data) {
            this._showTooltip({
              label,
              color,
              value
            });
            oldValue = value;
          } else {
            this._overlayRef.updatePosition();
          }
        }
      })
    ;
    this._dataContainer
      .on('mouseleave', (event: MouseEvent) => {
        this._setTooltipInVisible();
        this._hideTooltip();
      })
    ;
  }
}
