import { Component, effect, ElementRef, inject, input } from '@angular/core';

@Component({
  selector: 'emr-panel-footer',
  exportAs: 'emrPanelFooter',
  templateUrl: './panel-footer.component.html',
  styleUrl: './panel-footer.component.scss',
  host: {
    'class': 'emr-panel-footer'
  }
})
export class PanelFooterComponent {
  private _elementRef = inject(ElementRef);

  height = input<number>();

  ngOnDestroy() {
    this._elementRef.nativeElement.style.removeProperty('--emr-panel-footer-height');
  }

  constructor() {
    effect(() => {
      if (this.height()) {
        this._elementRef.nativeElement.style.setProperty('--emr-panel-footer-height', this.height() + 'px');
      } else {
        this._elementRef.nativeElement.style.removeProperty('--emr-panel-footer-height');
      }
    });
  }
}
