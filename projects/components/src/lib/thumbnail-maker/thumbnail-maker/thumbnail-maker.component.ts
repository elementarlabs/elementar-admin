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
    // console.log(contentEl.getBoundingClientRect());
    // console.log(target.width, target.height);
    // console.log(target.naturalWidth, target.naturalHeight);
  }

  onDragStart(event: Event): void {
    event.stopPropagation();
    event.preventDefault();
  }

  private _init(): void {
  }
}
