import { booleanAttribute, Component, ElementRef, inject, Input, OnInit, Renderer2 } from '@angular/core';
import { CommandBarPosition } from '../types';

@Component({
  selector: 'emr-command-bar',
  exportAs: 'emrCommandBar',
  templateUrl: './command-bar.component.html',
  styleUrl: './command-bar.component.css',
  host: {
    'class': 'emr-command-bar',
    '[class.is-open]': 'open',
  }
})
export class CommandBarComponent implements OnInit {
  private _elementRef = inject(ElementRef);
  private _renderer = inject(Renderer2);

  @Input({ transform: booleanAttribute })
  open = false;

  @Input()
  set position(position: CommandBarPosition) {
    this._position = position;
    this._renderer.setAttribute(this._elementRef.nativeElement, 'emr-command-bar-position', this._position);
  }
  private _position: CommandBarPosition = 'bottom';

  ngOnInit() {
    this._renderer.setAttribute(this._elementRef.nativeElement, 'emr-command-bar-position', this._position);
  }
}
