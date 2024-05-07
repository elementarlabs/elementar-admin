import {
  AfterContentInit,
  afterNextRender, AfterViewChecked, AfterViewInit, ChangeDetectorRef,
  Component, effect,
  ElementRef, inject,
  input,
  numberAttribute,
  OnInit, PLATFORM_ID, Renderer2, viewChild
} from '@angular/core';
import { isPlatformServer } from '@angular/common';
import * as d3 from 'd3';

@Component({
  selector: 'emr-area-line-chart',
  exportAs: 'emrAreaLineChart',
  standalone: true,
  imports: [
  ],
  templateUrl: './area-line-chart.component.html',
  styleUrl: './area-line-chart.component.scss'
})
export class AreaLineChartComponent {
  data = input.required<number[]>();
  strokeWidth = input(3, {
    transform: numberAttribute
  });
  svg: any;

  private _elementRef = inject(ElementRef);
  protected _initialized = false;
  private _host: any;

  constructor() {
    this._host = d3.select(this._elementRef.nativeElement);
    console.log(this._host);
  }

  private _render(): void {
    const element = this.svg()?.nativeElement as HTMLElement;

    if (!this._initialized) {
      this.svg = this._host.select('svg');
    }
  }
}
