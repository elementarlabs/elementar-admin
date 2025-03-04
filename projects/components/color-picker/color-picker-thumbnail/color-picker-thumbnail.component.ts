import { Component, ElementRef, inject, input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'emr-color-picker-thumbnail,[emr-color-picker-thumbnail]',
  exportAs: 'emrColorPickerThumbnail',
  templateUrl: './color-picker-thumbnail.component.html',
  styleUrl: './color-picker-thumbnail.component.scss',
  host: {
    'class': 'emr-color-picker-thumbnail'
  }
})
export class ColorPickerThumbnailComponent {
  private _elementRef = inject(ElementRef);

  color = input('');

  ngOnChanges(changes: SimpleChanges) {
    if (!this.color()) {
      return;
    }

    this._elementRef.nativeElement.style.setProperty('--emr-color-picker-thumbnail-bg', this.color());
  }
}
