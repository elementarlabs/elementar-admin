import { afterNextRender, Component, ElementRef, input, OnInit, viewChild } from '@angular/core';
import { MatSlider, MatSliderThumb } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import { DragImageDirective } from '../drag-image.directive';

@Component({
  selector: 'emr-thumbnail-maker',
  exportAs: 'emrThumbnailMaker',
  standalone: true,
  imports: [
    MatSlider,
    MatSliderThumb,
    FormsModule,
    DragImageDirective
  ],
  templateUrl: './thumbnail-maker.component.html',
  styleUrl: './thumbnail-maker.component.scss',
  host: {
    'class': 'emr-thumbnail-maker'
  }
})
export class ThumbnailMakerComponent implements OnInit {
  src = input.required<string>();
  private _content = viewChild.required<ElementRef>('content');

  scale = 1;
  min = 1;
  max = 100;
  loading = true;

  constructor() {
    afterNextRender(() => {
      this._init();
    });
  }

  ngOnInit() {
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
  }

  onScaleChange($event: number) {
    this.scale = $event / 100;
  }

  private _init(): void {
  }
}
