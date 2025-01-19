import {
  AfterViewChecked,
  booleanAttribute,
  ChangeDetectionStrategy,
  Component, DestroyRef,
  effect,
  ElementRef,
  inject,
  input,
  numberAttribute, OnDestroy,
  PLATFORM_ID,
  TemplateRef,
} from '@angular/core';
import { isPlatformServer } from '@angular/common';
import {
  Selection,
  curveLinear,
  curveCatmullRom,
  curveBumpX,
  scaleLinear,
  select,
  scalePoint,
  min, max,
  pointer,
  line, area,
  curveStep
} from 'd3';
import { OverlayPosition } from '../../overlay';
import { fromEvent } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MchartLineCurveType } from '../types';
import { BaseChartTooltip } from '../base-chart.tooltip';

let nextId = 0;

@Component({
  selector: 'emr-mchart-line',
  exportAs: 'emrMchartLine',
  templateUrl: './mchart-line.component.html',
  styleUrl: './mchart-line.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'emr-mchart-line',
    '[class.fill-area-gradient]': 'fillAreaGradient()',
  }
})
export class MchartLineComponent extends BaseChartTooltip implements OnDestroy, AfterViewChecked {
  private _initialized = false;
  private _host: any;
  private _svg: any;
  private _dimensions: DOMRect;
  private _hostWidth = 0;
  private _hostHeight = 0;
  private _innerWidth = 0;
  private _innerHeight = 0;
  private _yScale: any;
  private _xScale: any;
  private _curveMap = {
    'linear': curveLinear,
    'catmullRom': curveCatmullRom,
    'curveBumpX': curveBumpX,
    'curveStep': curveStep
  };
  private _resizeObserver: ResizeObserver;
  private _tooltipDot: HTMLElement;
  private _area: any;
  private _line: any;
  private _platformId = inject(PLATFORM_ID);
  private _destroyRef = inject(DestroyRef);
  private _elementRef = inject(ElementRef);

  data = input<number[]>([]);
  labels = input<any[]>([]);
  strokeWidth = input(2, {
    transform: numberAttribute
  });
  showArea = input(false, {
    transform: booleanAttribute
  });
  showMarkers = input(false, {
    transform: booleanAttribute
  });
  responsive = input(false, {
    transform: booleanAttribute
  });
  fillAreaGradient = input(false, {
    transform: booleanAttribute
  });
  curve = input<MchartLineCurveType>('linear');
  xAccessor = input((d: any, i: number) => i);
  yAccessor = input((d: any) => d);
  compact = input(false, {
    transform: booleanAttribute
  });
  markerDotSize = input(5, {
    transform: numberAttribute
  });
  tooltip = input<TemplateRef<unknown>>();
  tooltipPosition = input<OverlayPosition>('after-center');

  get gradientId(): string {
    return 'areaGradient' + this._gradientId;
  }
  private _gradientId = nextId++;

  constructor() {
    super();
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

      if (this._dimensions.width !== 0 && this._dimensions.height !== 0) {
        this._initialized = true;
        this._render();
        this._setupResizeObserver();
      }
    }
  }

  ngOnDestroy() {
    this._resizeObserver?.disconnect();
  }

  getTooltipPosition(): OverlayPosition {
    return this.tooltipPosition();
  }

  getTooltipTemplateRef(): TemplateRef<any> | undefined {
    return this.tooltip();
  }

  private _render(): void {
    this._setupContainers();
    this._setupData();
  }

  private _setupContainers(): void {
    this._hostWidth = this._dimensions.width;
    this._hostHeight = this._dimensions.height;
    this._innerWidth = this._dimensions.width;
    this._innerHeight = this._dimensions.height;
    this._host = select(this._elementRef.nativeElement);
    this._svg = this._host
      .select('svg')
      .attr('viewBox', `0 0 ${this._hostWidth} ${this._hostHeight}`)
    ;

    if (this.tooltip()) {
      this._tooltipDot = this._renderer.createElement('div');
      this._renderer.setStyle(this._tooltipDot, 'width', '10px');
      this._renderer.setStyle(this._tooltipDot, 'height', '10px');
      this._renderer.setStyle(this._tooltipDot, 'z-index', '-1');
      this._renderer.setStyle(this._tooltipDot, 'position', 'fixed');
      this._renderer.setStyle(this._tooltipDot, 'opacity', '0');
      this._renderer.appendChild(this._document.body, this._tooltipDot);
    }
  }

  private _setupData(isUpdate = false): void {
    let markerDotSize = this.markerDotSize();

    if (!this.showMarkers()) {
      markerDotSize = this.strokeWidth();
    }

    const xAccessor = this.xAccessor();
    const yAccessor = this.yAccessor();
    const xDomain = this.data().map((d: any, i: number) => xAccessor(d, i)) as any;

    if (!this._xScale) {
      this._xScale = scalePoint().domain(xDomain);
    }

    this._xScale.range([markerDotSize, this._innerWidth - markerDotSize]);

    const yDomain = [
      this.compact() ? min(this.data().map(d => yAccessor(d))) : 0,
      max(this.data().map(d => yAccessor(d)))
    ];

    if (!this._yScale) {
      this._yScale = scaleLinear()
        .domain(yDomain)
      ;
    }

    this._yScale.range([this._innerHeight - markerDotSize, markerDotSize])

    if (this.showArea()) {
      const areaGenerator = area()
        .x((d, i) => this._xScale(xAccessor(d, i)))
        .y1((d) => this._yScale(yAccessor(d)))
        .y0(this._innerHeight - markerDotSize)
        .curve(this._curveMap[this.curve()])
      ;

      if (!this._area) {
        // add area
        this._area = this._svg
          .append('path')
          .datum(this.data())
          .attr('d', areaGenerator)
          .attr('class', 'area')
        ;

        if (this.fillAreaGradient()) {
          this._area.attr('fill', `url(#${this.gradientId})`);
        }
      } else {
        this._area.attr('d', areaGenerator);
      }
    }

    const lineGenerator = line()
      .x((d, i) => this._xScale(xAccessor(d, i)))
      .y((d) => this._yScale(yAccessor(d)))
    ;

    if (!this._line) {
      // add line
      this._line = this._svg
        .append('path')
        .datum(this.data())
        .attr('d', lineGenerator.curve(this._curveMap[this.curve()]))
        .attr('class', 'line')
        .attr('stroke-width', this.strokeWidth())
      ;
    } else {
      this._line.attr('d', lineGenerator.curve(this._curveMap[this.curve()]))
    }

    if (isUpdate) {
      return;
    }

    if (this.showMarkers() || this.tooltip()) {
      const markerLine = this._svg
        .append('line')
        .attr('x1', 0)
        .attr('x2', 0)
        .attr('y1', 0)
        .attr('y2', this._innerHeight - markerDotSize)
        .attr('opacity', 0)
        .attr('class', 'marker-line')
      ;
      const markerDot: Selection<any, any, any, any> = this._svg
        .append('circle')
        .attr('cx', 0)
        .attr('cy', 0)
        .attr('r', markerDotSize)
        .attr('opacity', 0)
        .attr('class', 'marker-dot')
      ;

      let x = 0;
      let y = 0;
      let label: any;
      let value: any;

      if (this.tooltip()) {
        this._createTooltipOrigin();
      }

      fromEvent<MouseEvent>(this._document, 'mousemove')
        .pipe(
          takeUntilDestroyed(this._destroyRef)
        )
        .subscribe((e: MouseEvent) => {
          const target = e.target as HTMLElement;
          const oldXPosition = +markerDot.attr('cx');
          const pointerCoords = pointer(e, this._svg.node());
          const [posX, posY] = pointerCoords;
          let visible = true;

          if (posX < this.markerDotSize() || posY < this.markerDotSize() || posX > this._hostWidth || posY > this._hostHeight) {
            visible = false;
            this._overlayRef?.detach();
            markerLine.attr('opacity', 0);
            markerDot.attr('opacity', 0);
          } else {
            if (target.closest('.emr-mchart-line') ||
              target.classList.contains('emr-mchart-tooltip-overlay') ||
              target.closest('.emr-mchart-tooltip-overlay')
            ) {
              if (this.showMarkers()) {
                markerLine.attr('opacity', 1);
                markerDot.attr('opacity', 1);
              }
            } else {
              visible = false;
              this._overlayRef?.detach();
            }
          }

          const eachBand = this._xScale.step();
          const index = Math.round((posX / eachBand));
          const dataValue = this.data()[index];
          label = this.labels()[index] ? this.labels()[index] : xAccessor(index, index);
          value = yAccessor(dataValue);
          x = this._xScale(xAccessor(index, index));
          y = this._yScale(yAccessor(dataValue));
          markerLine
            .attr('x1', x)
            .attr('x2', x)
          ;
          markerDot
            .attr('cx', x)
            .attr('cy', y)
          ;

          if (this.tooltip()) {
            this._setTooltipPositionByEvent(e);

            if (visible) {
              this._setTooltipVisible();

              if (!this._overlayRef?.hasAttached()) {
                this._showTooltip({
                  label,
                  value
                });
              } else {
                if (oldXPosition !== x) {
                  this._showTooltip({
                    label,
                    value
                  });
                } else {
                  this._overlayRef.updatePosition();
                }
              }
            } else {
              this._setTooltipInVisible();
            }
          }
        })
      ;
    }
  }

  private _setupResizeObserver(): void {
    if (!this.responsive()) {
      return;
    }

    this._resizeObserver = new ResizeObserver((entries) => {
      if (this._hostWidth !== entries[0].contentRect.width || this._hostHeight !== entries[0].contentRect.height) {
        this._hostWidth = entries[0].contentRect.width;
        this._hostHeight = entries[0].contentRect.height;
        this._innerWidth = entries[0].contentRect.width;
        this._innerHeight = entries[0].contentRect.height;
        this._svg
          .attr("viewBox", `0 0 ${this._hostWidth} ${this._hostHeight}`)
        ;
        this._setupData(true);
      }
    });
    this._resizeObserver.observe(this._elementRef.nativeElement);
  }
}
