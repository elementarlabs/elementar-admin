import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component, DestroyRef,
  effect,
  ElementRef,
  inject,
  Injector,
  input,
  numberAttribute,
  PLATFORM_ID, Renderer2,
  TemplateRef, viewChild,
  ViewContainerRef,
} from '@angular/core';
import { DOCUMENT, isPlatformServer } from '@angular/common';
import * as d3 from 'd3';
import { Selection } from 'd3';
import {
  ConnectedPosition,
  FlexibleConnectedPositionStrategy,
  Overlay,
  OverlayConfig,
  OverlayRef
} from '@angular/cdk/overlay';
import { PositionManager } from '../../popover/position-manager';
import { PopoverPosition } from '../../popover';
import { TemplatePortal } from '@angular/cdk/portal';
import { fromEvent } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'emr-line-micro-chart',
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './line-micro-chart.component.html',
  styleUrl: './line-micro-chart.component.scss',
  host: {
    'class': 'emr-line-micro-chart'
  }
})
export class LineMicroChartComponent {
  private _renderer = inject(Renderer2);
  private _document = inject(DOCUMENT);
  private _destroyRef = inject(DestroyRef);
  private _overlay = inject(Overlay);
  private _viewContainerRef = inject(ViewContainerRef);
  private _elementRef = inject(ElementRef);
  private _initialized = false;
  private _host: any;
  private _svg: any;
  private _dataContainer: any;
  private _dimensions: DOMRect;
  private _hostWidth = 0;
  private _hostHeight = 0;
  private _innerWidth = 0;
  private _innerHeight = 0;
  private _yScale: any;
  private _xScale: any;
  private _platformId = inject(PLATFORM_ID);
  private _curveMap = {
    'linear': d3.curveLinear,
    'catmullRom': d3.curveCatmullRom,
    'curveBumpX': d3.curveBumpX
  };
  position: PopoverPosition = 'after-center';
  origin: HTMLElement;
  private _overlayRef: OverlayRef | null = null;
  private _tooltipPortal!: TemplatePortal;
  private _injector = inject(Injector);

  readonly tooltipDot = viewChild.required<ElementRef>('tooltipDot');

  tooltipTemplateRef = input<TemplateRef<unknown>>();
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
  showTooltip = input(false, {
    transform: booleanAttribute
  });
  curve = input<'linear' | 'catmullRom' | 'curveBumpX'>('linear');
  padding = input(0, {
    transform: numberAttribute
  });
  xScaleType = input<'category'|'time'>('category');
  xAccessor = input((d: any, i: number) => i);
  yAccessor = input((d: any) => d);
  compact = input(false, {
    transform: booleanAttribute
  });
  markerDotSize = input(5, {
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
    this._hostWidth = this._dimensions.width;
    this._hostHeight = this._dimensions.height;
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
    let markerDotSize = this.markerDotSize();

    if (!this.showMarkers()) {
      markerDotSize = this.strokeWidth();
    }

    const xAccessor = this.xAccessor();
    const yAccessor = this.yAccessor();

    if (this.xScaleType() === 'category') {
      const xDomain = this.data().map((d: any, i: number) => xAccessor(d, i)) as any;
      this._xScale = d3.scalePoint(xDomain, [this.markerDotSize(), this._innerWidth - markerDotSize]);
    } else if (this.xScaleType() === 'time') {
      const xDomain = d3.extent(this.data(), xAccessor) as any;
      this._xScale = d3.scaleTime(xDomain, [this.markerDotSize(), this._innerWidth - markerDotSize]);
    }

    const yDomain = [
      this.compact() ? d3.min(this.data().map(d => yAccessor(d))) : 0,
      d3.max(this.data().map(d => yAccessor(d)))
    ];
    this._yScale = this._yScale
      .domain(yDomain)
      .range([this._innerHeight - markerDotSize, markerDotSize])
    ;

    if (this.showArea()) {
      const areaGenerator = d3.area()
        .x((d, i) => this._xScale(xAccessor(d, i)))
        .y1((d) => this._yScale(yAccessor(d)))
        .y0(this._innerHeight - markerDotSize)
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
      .y((d) => this._yScale(yAccessor(d)))
    ;

    const line = this._svg
      .append('path')
      .datum(this.data())
      .attr('d', lineGenerator.curve(this._curveMap[this.curve()]))
      .attr('class', 'line')
      .attr('stroke-width', this.strokeWidth())
    ;

    if (this.showMarkers()) {
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
      let xValue: any;
      let yValue: any;

      if (this.showTooltip()) {
        this.origin = this.tooltipDot().nativeElement;
      }

      fromEvent<MouseEvent>(this._document, 'mousemove')
        .pipe(
          takeUntilDestroyed(this._destroyRef)
        )
        .subscribe((e: MouseEvent) => {
          const target = e.target as HTMLElement;
          const oldXPosition = +markerDot.attr('cx');
          const pointerCoords = d3.pointer(e, this._svg.node());
          const [posX, posY] = pointerCoords;
          let visible = true;

          if (
            posX < this.markerDotSize() || posY < this.markerDotSize() ||
            posX > this._hostWidth || posY > this._hostHeight || !target.closest('.emr-line-micro-chart')
          ) {
            visible = false;
            this._overlayRef?.detach();
            markerLine.attr('opacity', 0);
            markerDot.attr('opacity', 0);
          } else {
            markerLine.attr('opacity', 1);
            markerDot.attr('opacity', 1);
          }

          if (this.xScaleType() === 'category') {
            const eachBand = this._xScale.step();
            const index = Math.round((posX / eachBand));
            const dataValue = this.data()[index];
            xValue = xAccessor(index, index);
            yValue = yAccessor(dataValue);
            x = this._xScale(xValue);
            y = this._yScale(yValue);
          } else if (this.xScaleType() === 'time') {
            // const bisect = d3.bisector(xAccessor);
            // const index = bisect.center(this.data(), this._xScale.invert(posX));
            // const val = this.data()[index];
          }

          markerLine
            .attr('x1', x)
            .attr('x2', x)
          ;
          markerDot
            .attr('cx', x)
            .attr('cy', y)
          ;

          if (this.showTooltip()) {
            this._renderer.setStyle(this.tooltipDot().nativeElement, 'left', (e.clientX - 4) + 'px');
            this._renderer.setStyle(this.tooltipDot().nativeElement, 'top', (e.clientY - 4) + 'px');

            if (visible) {
              this._renderer.addClass(this.tooltipDot().nativeElement, 'is-visible');

              if (!this._overlayRef?.hasAttached()) {
                this._show({
                  xValue,
                  yValue
                });
              } else {
                if (oldXPosition !== x) {
                  this._show({
                    xValue,
                    yValue
                  });
                } else {
                  this._overlayRef.updatePosition();
                }
              }
            } else {
              this._renderer.removeClass(this.tooltipDot().nativeElement, 'is-visible');
            }
          }
        })
      ;
    }
  }

  private _show(data: any): void {
    this._overlayRef?.detach();
    this._overlayRef = this._overlay.create(this._getOverlayConfig());
    this._overlayRef.attach(this._getContentPortal(data));
  }

  private _getContentPortal(data: any) {
    this._tooltipPortal = new TemplatePortal(
      this.tooltipTemplateRef() as TemplateRef<any>,
      this._viewContainerRef,
      {
        '$implicit': data
      },
      this._injector
    );

    return this._tooltipPortal;
  }

  private _getOverlayConfig() {
    return new OverlayConfig({
      positionStrategy: this._getOverlayPositionStrategy(),
      scrollStrategy: this._overlay.scrollStrategies.reposition()
    });
  }

  private _getOverlayPositionStrategy(): FlexibleConnectedPositionStrategy {
    return this._overlay
      .position()
      .flexibleConnectedTo(this.origin)
      .withFlexibleDimensions()
      .withGrowAfterOpen()
      .withPositions(this._getOverlayPositions())
    ;
  }

  private _getOverlayPositions(): ConnectedPosition[] {
    return (new PositionManager()).build(this.position);
  }
}
