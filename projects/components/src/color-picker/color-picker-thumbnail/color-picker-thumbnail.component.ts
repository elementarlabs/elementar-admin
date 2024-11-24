import { Component, ElementRef, inject, Input, SimpleChanges } from '@angular/core';

@Component({
    selector: 'emr-color-picker-thumbnail,[emr-color-picker-thumbnail]',
    exportAs: 'emrColorPickerThumbnail',
    templateUrl: './color-picker-thumbnail.component.html',
    styleUrls: ['./color-picker-thumbnail.component.scss'],
    host: {
        'class': 'emr-color-picker-thumbnail'
    }
})
export class ColorPickerThumbnailComponent {
  private _elementRef = inject(ElementRef);

  @Input()
  color: string;

  ngOnChanges(changes: SimpleChanges) {
    if (!this.color) {
      return;
    }

    this._elementRef.nativeElement.style.setProperty('--emr-color-picker-thumbnail-bg', this.color);
  }
}
