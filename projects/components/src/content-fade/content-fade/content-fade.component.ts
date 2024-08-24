import {
  Component,
  ElementRef,
  inject,
  input,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { ContentFadePosition } from '../types';

@Component({
  selector: 'emr-content-fade',
  exportAs: 'emrContentFade',
  standalone: true,
  templateUrl: './content-fade.component.html',
  styleUrl: './content-fade.component.scss',
  host: {
    'class': 'emr-content-fade',
    '[class.position-both]': 'position() === "both"',
    '[class.position-start]': 'position() === "start"',
    '[class.position-end]': 'position() === "end"',
  }
})
export class ContentFadeComponent implements OnChanges {
  private _elementRef = inject(ElementRef);

  color = input();
  width = input();
  position = input<ContentFadePosition>('both');

  ngOnChanges(changes: SimpleChanges) {
    if (changes['width']) {
      (this._elementRef.nativeElement as HTMLElement).style.setProperty('--emr-content-fade-width', changes['width'].currentValue, 'important');
    }

    if (changes['color']) {
      (this._elementRef.nativeElement as HTMLElement).style.setProperty('--emr-content-fade-color', changes['color'].currentValue, 'important');
    }
  }
}
