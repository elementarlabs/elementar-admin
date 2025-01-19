import { Component, ElementRef, inject, Input } from '@angular/core';

@Component({
  selector: 'emr-panel-footer',
  exportAs: 'emrPanelFooter',
  templateUrl: './panel-footer.component.html',
  styleUrls: ['./panel-footer.component.scss'],
  host: {
    'class': 'emr-panel-footer'
  }
})
export class PanelFooterComponent {
  private _elementRef = inject(ElementRef);

  @Input()
  set height(height: string | number) {
    this._elementRef.nativeElement.style.setProperty('--emr-panel-footer-height', height + 'px');
  }

  ngOnDestroy() {
    this._elementRef.nativeElement.style.removeProperty('--emr-panel-footer-height');
  }
}
