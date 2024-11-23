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
  PLATFORM_ID, TemplateRef,
} from '@angular/core';
import { isPlatformServer } from '@angular/common';
import { pointer, scaleBand, scaleLinear, select } from 'd3';
import { OverlayPosition } from '../../overlay';
import { fromEvent } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { BaseChartTooltip } from '../base-chart.tooltip';

let nextId = 0;

@Component({
    selector: 'emr-mchart-bar',
    exportAs: 'emrMchartBar',
    imports: [],
    templateUrl: './mchart-bar.component.html',
    styleUrl: './mchart-bar.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        'class': 'emr-mchart-bar',
        '[class.fill-gradient]': 'fillGradient()',
        '[class.with-tooltip]': '!!tooltip()',
    }
})
export class MchartBarComponent extends BaseChartTooltip implements OnDestroy, AfterViewChecked {
  private _initialized = false;
  private _host: any;
  private _svg: any;
  private _hlContainer: any;
  private _dataContainer: any;
  private _dimensions: DOMRect;
  private _innerWidth = 0;
  private _innerHeight = 0;
  private _hostWidth = 0;
  private _hostHeight = 0;
  private _xScale: any;
  private _yScale: any;
  private _resizeObserver: ResizeObserver;
  private _platformId = inject(PLATFORM_ID);
  private _elementRef = inject(ElementRef);
  private _destroyRef = inject(DestroyRef);

  data = input<number[]>([]);
  labels = input<string[]>([]);
  gap = input(0.2, {
    transform: numberAttribute
  });
  radius = input(0, {
    transform: numberAttribute
  });
  highlight = input(false, {
    transform: booleanAttribute
  });
  responsive = input(false, {
    transform: booleanAttribute
  });
  fillGradient = input(false, {
    transform: booleanAttribute
  });
  xAccessor = input((d: any, i: number) => i);
  yAccessor = input((d: any) => d);
  tooltip = input<TemplateRef<any>>();
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
      this._setupResizeObserver();
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
    this._init();
    this._setupAxisScale();
    this._setupData();
    this._initTooltip();
  }

  private _init(): void {
    this._hostWidth = this._dimensions.width;
    this._hostHeight = this._dimensions.height;
    this._innerWidth = this._dimensions.width;
    this._innerHeight = this._dimensions.height;
    this._host = select(this._elementRef.nativeElement);
    this._svg = this._host
      .select('svg')
      .attr('viewBox', `0 0 ${this._hostWidth} ${this._hostHeight}`)
    ;
  }

  private _setupAxisScale(): void {
    if (!this._xScale) {
      this._xScale = scaleBand()
        .paddingInner(this.gap())
        .domain(this.data().map((d, i) => i.toString()))
      ;
    }

    this._xScale.range([0, this._innerWidth]);

    if (!this._yScale) {
      this._yScale = scaleLinear().domain([0, Math.max(...this.data())]);
    }

    this._yScale.range([this._innerHeight, 0]);
  }

  private _setupData(): void {
    if (this.highlight()) {
      if (!this._hlContainer) {
        this._hlContainer = this._svg.append('g')
          .attr('class', 'hl-container')
          .attr('transform', `translate(0,0)`)
        ;
        this._hlContainer.selectAll('rect')
          .data(this.data())
          .enter()
          .append('rect')
          .attr('rx', this.radius())
          .attr('x', (d: any, i: number) => this._xScale(i.toString()))
          .attr('y', 0)
          .attr('width', this._xScale.bandwidth())
          .attr('height', this._innerHeight)
          .attr('class', 'highlight')
        ;
      } else {
        this._hlContainer.selectAll('rect')
          .attr('x', (d: any, i: number) => this._xScale(i.toString()))
          .attr('y', 0)
          .attr('width', this._xScale.bandwidth())
          .attr('height', this._innerHeight)
        ;
      }
    }

    if (!this._dataContainer) {
      this._dataContainer = this._svg.append('g')
        .attr('class', 'data-container')
        .attr('transform', `translate(0,0)`)
      ;
      const allBars = this._dataContainer.selectAll('rect')
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

      if (this.fillGradient()) {
        allBars.attr('fill', `url(#${this.gradientId})`);
      }
    } else {
      this._dataContainer.selectAll('rect')
        .attr('x', (d: any, i: number) => this._xScale(i.toString()))
        .attr('y', (d: any) => this._yScale(d))
        .attr('width', this._xScale.bandwidth())
        .attr('height', (d: any) => this._innerHeight - this._yScale(d))
      ;
    }
  }

  private _setupResizeObserver(): void {
    if (!this.responsive()) {
      return;
    }

    this._resizeObserver?.disconnect();
    this._resizeObserver = new ResizeObserver((entries) => {
      if (this._hostWidth !== entries[0].contentRect.width || this._hostHeight !== entries[0].contentRect.height) {
        this._hostWidth = entries[0].contentRect.width;
        this._hostHeight = entries[0].contentRect.height;
        this._innerWidth = entries[0].contentRect.width;
        this._innerHeight = entries[0].contentRect.height;
        this._svg.attr('viewBox', `0 0 ${this._hostWidth} ${this._hostHeight}`);
        this._setupAxisScale();
        this._setupData();
      }
    });
    this._resizeObserver.observe(this._elementRef.nativeElement);
  }

  private _initTooltip(): void {
    if (!this.tooltip()) {
      return;
    }

    const xAccessor = this.xAccessor();
    const yAccessor = this.yAccessor();
    this._createTooltipOrigin();

    let x = 0;
    let y = 0;
    let label: any;
    let value: any;
    let oldX: any;

    fromEvent<MouseEvent>(this._document, 'mousemove')
      .pipe(
        takeUntilDestroyed(this._destroyRef)
      )
      .subscribe((e: MouseEvent) => {
        const target = e.target as HTMLElement;
        const pointerCoords = pointer(e, this._svg.node());
        const [posX, posY] = pointerCoords;
        let visible = true;

        if (posX < 0 || posY < 0 || posX > this._hostWidth || posY > this._hostHeight) {
          visible = false;
          oldX = null;
          this._overlayRef?.detach();
        } else {
          if (!target.closest('.emr-mchart-line') ||
            !target.classList.contains('emr-mchart-tooltip-overlay') ||
            !target.closest('.emr-mchart-tooltip-overlay')
          ) {
            oldX = null;
            this._overlayRef?.detach();
          }
        }

        const eachBand = this._xScale.step();
        const index = Math.floor(posX / eachBand);
        const dataValue = this.data()[index];
        label = this.labels()[index] ? this.labels()[index] : xAccessor(index, index);
        value = yAccessor(dataValue);
        x = this._xScale(xAccessor(index, index));
        y = this._yScale(yAccessor(dataValue));
        this._setTooltipPositionByEvent(e);

        if (visible) {
          this._setTooltipVisible();

          if (!this._overlayRef?.hasAttached()) {
            oldX = x;
            this._showTooltip({
              label,
              value
            });
          } else {
            if (oldX !== x) {
              oldX = x;
              this._showTooltip({
                label,
                value
              });
            } else {
              this._overlayRef.updatePosition();
            }
          }
        } else {
          oldX = x;
          this._setTooltipInVisible();
        }
      })
    ;
  }
}
