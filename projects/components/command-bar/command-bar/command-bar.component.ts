import {
  booleanAttribute,
  Component,
  effect,
  ElementRef,
  inject,
  input,
  Renderer2
} from '@angular/core';
import { CommandBarPosition } from '../types';

@Component({
  selector: 'emr-command-bar',
  exportAs: 'emrCommandBar',
  standalone: true,
  templateUrl: './command-bar.component.html',
  styleUrl: './command-bar.component.scss',
  host: {
    'class': 'emr-command-bar',
    '[class.is-open]': 'open()',
  }
})
export class CommandBarComponent {
  private _elementRef = inject(ElementRef);
  private _renderer = inject(Renderer2);

  open = input(false, {
    transform: booleanAttribute
  });
  position = input<CommandBarPosition>('bottom');

  constructor() {
    effect(() => {
      this._renderer.setAttribute(this._elementRef.nativeElement, 'emr-command-bar-position', this.position());
    });
  }
}
