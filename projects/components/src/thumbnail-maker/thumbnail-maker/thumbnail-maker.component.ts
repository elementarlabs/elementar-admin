import { Component, ElementRef, input, viewChild } from '@angular/core';
import { MatSlider, MatSliderThumb } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import { DragImageDirective } from '../drag-image.directive';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { ThumbnailMakerApi } from '../types';

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
    'class': 'emr-thumbnail-maker',
    '[class.loading]': 'loading'
  }
})
export class ThumbnailMakerComponent {
  private _content = viewChild.required<ElementRef>('content');
  private _dragImage = viewChild.required<DragImageDirective>(DragImageDirective);
  private _thumbnailSize = 300;

  src = input.required<string>();
  helperText = input('');

  get api(): ThumbnailMakerApi {
    return {
      getDataUrl: () => this._dragImage().getDataUrl(),
      toBlob: (callback: BlobCallback) => this._dragImage().toBlob(callback),
      getCanvas: () => this._dragImage().getCanvas(),
      increase: () => this.increase(),
      decrease: () => this.decrease()
    }
  }

  protected scale = 0;
  protected min = 1;
  protected max = 100;
  protected loading = true;
  protected alreadyDragged = false;

  protected get isEqualsToMinScale(): boolean {
    return this.scale <= this.min / 100;
  }

  protected get isEqualsToMaxScale(): boolean {
    return this.scale >= this.max / 100;
  }

  protected onLoad(event: Event): void {
    const contentEl = this._content().nativeElement as HTMLElement;
    const target = event.target as HTMLImageElement;
    const heightScale =  this._thumbnailSize / target.height;
    const widthScale = this._thumbnailSize / target.width;
    const minScale = Math.max(heightScale, widthScale);
    this.scale = minScale;
    this.min = minScale * 100;
    this.loading = false;
  }

  protected onDragStart(event: Event): void {
    event.stopPropagation();
    event.preventDefault();
    this.alreadyDragged = true;
  }

  protected onScaleChange($event: number) {
    this.scale = $event / 100;
  }

  protected increase(): void {
    if ((this.scale + .1) * 100 <= this.max) {
      this.scale += .1;
    } else {
      this.scale = this.max / 100;
    }
  }

  protected decrease(): void {
    if ((this.scale - .1) * 100 >= this.min) {
      this.scale -= .1;
    } else {
      this.scale = this.min / 100;
    }
  }
}
