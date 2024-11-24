import { Component, ElementRef, inject, Input, OnDestroy } from '@angular/core';

@Component({
    selector: 'emr-panel-header',
    exportAs: 'emrPanelHeader',
    templateUrl: './panel-header.component.html',
    styleUrls: ['./panel-header.component.scss'],
    host: {
        'class': 'emr-panel-header'
    }
})
export class PanelHeaderComponent implements OnDestroy {
  private _elementRef = inject(ElementRef);

  @Input()
  set height(height: string | number) {
    this._elementRef.nativeElement.style.setProperty('--emr-panel-header-height', height + 'px');
  }

  ngOnDestroy() {
    this._elementRef.nativeElement.style.removeProperty('--emr-panel-header-height');
  }
}
