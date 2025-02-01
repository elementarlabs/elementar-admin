import {
  booleanAttribute,
  Component, effect,
  ElementRef,
  inject,
  input,
  output,
  Renderer2
} from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { AnnouncementVariant } from '../types';

@Component({
  selector: 'emr-announcement',
  exportAs: 'emrAnnouncement',
  imports: [
    MatIcon,
    MatIconButton
  ],
  templateUrl: './announcement.component.html',
  styleUrl: './announcement.component.scss',
  host: {
    'class': 'emr-announcement'
  }
})
export class AnnouncementComponent {
  private _elementRef = inject(ElementRef);
  private _renderer = inject(Renderer2);

  variant = input<AnnouncementVariant>('neutral');
  iconName = input('');
  closable = input(false, {
    transform: booleanAttribute
  });

  readonly closed = output<void>();

  constructor() {
    effect(() => {
      this._renderer.setAttribute(this._elementRef.nativeElement, 'data-variant', this.variant() || 'neutral');
    });
  }

  protected close() {
    this.closed.emit();
  }
}
