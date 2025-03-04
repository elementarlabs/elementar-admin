import { Component, effect, ElementRef, inject, input, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'emr-panel-header',
  exportAs: 'emrPanelHeader',
  templateUrl: './panel-header.component.html',
  styleUrl: './panel-header.component.scss',
  host: {
    'class': 'emr-panel-header'
  }
})
export class PanelHeaderComponent implements OnDestroy {
  private _elementRef = inject(ElementRef);

  height = input<number>();

  ngOnDestroy() {
    this._elementRef.nativeElement.style.removeProperty('--emr-panel-header-height');
  }

  constructor() {
    effect(() => {
      if (this.height()) {
        this._elementRef.nativeElement.style.setProperty('--emr-panel-header-height', this.height() + 'px');
      } else {
        this._elementRef.nativeElement.style.removeProperty('--emr-panel-header-height');
      }
    });
  }
}
