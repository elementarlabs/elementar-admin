import { Component, ElementRef, input, viewChild } from '@angular/core';
import { MatSlider, MatSliderThumb } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import { DragImageDirective } from '../drag-image.directive';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';

@Component({
  selector: 'emr-thumbnail-maker',
  exportAs: 'emrThumbnailMaker',
  standalone: true,
  imports: [
    MatSlider,
    MatSliderThumb,
    FormsModule,
    DragImageDirective,
    MatIcon,
    MatIconButton
  ],
  templateUrl: './thumbnail-maker.component.html',
  styleUrl: './thumbnail-maker.component.scss',
  host: {
    'class': 'emr-thumbnail-maker'
  }
})
export class ThumbnailMakerComponent {
  private _content = viewChild.required<ElementRef>('content');

  src = input.required<string>();
  helperText = input('');

  protected scale = 1;
  protected min = 1;
  protected max = 100;
  protected loading = true;
  protected alreadyDragged = false;

  get isEqualsToMinScale(): boolean {
    return this.scale <= this.min / 100;
  }

  get isEqualsToMaxScale(): boolean {
    return this.scale >= this.max / 100;
  }

  onLoad(event: Event): void {
    const contentEl = this._content().nativeElement as HTMLElement;
    const target = event.target as HTMLImageElement;
    const contentHeight = contentEl.getBoundingClientRect().height;
    const contentWidth = contentEl.getBoundingClientRect().width;
    const heightScale =  contentHeight / target.height;
    const widthScale = contentWidth / target.width;
    const minScale = Math.min(heightScale, widthScale);
    this.scale = minScale;
    this.min = minScale * 100;
  }

  onDragStart(event: Event): void {
    event.stopPropagation();
    event.preventDefault();
    this.alreadyDragged = true;
  }

  onScaleChange($event: number) {
    this.scale = $event / 100;
  }

  increase(): void {
    if ((this.scale + .1) * 100 <= this.max) {
      this.scale += .1;
    } else {
      this.scale = this.max / 100;
    }
  }

  decrease(): void {
    if ((this.scale - .1) * 100 >= this.min) {
      this.scale -= .1;
    } else {
      this.scale = this.min / 100;
    }
  }
}
