import { afterNextRender, Component, ElementRef, input, numberAttribute, OnInit, viewChild } from '@angular/core';
import { MatSlider, MatSliderThumb } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import { DragImageDirective } from '../drag-image.directive';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'emr-thumbnail-maker',
  exportAs: 'emrThumbnailMaker',
  standalone: true,
  imports: [
    MatSlider,
    MatSliderThumb,
    FormsModule,
    DragImageDirective,
    MatIcon
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
  thumbRadius = input(150,{
    transform: numberAttribute
  });
  helperText = input('');

  protected scale = 1;
  protected min = 1;
  protected max = 100;
  protected loading = true;
  protected alreadyDragged = false;

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

    console.log(target.getBoundingClientRect());
  }

  onDragStart(event: Event): void {
    event.stopPropagation();
    event.preventDefault();
    this.alreadyDragged = true;
  }

  onScaleChange($event: number) {
    this.scale = $event / 100;
  }

  private _init(): void {
  }
}
