import { booleanAttribute, Component, input } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatRipple } from '@angular/material/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'emr-pass-toggle-visibility',
  exportAs: 'emrPassToggleVisibility',
  imports: [
    MatIconButton,
    MatRipple,
    MatIcon
  ],
  templateUrl: './pass-toggle-visibility.component.html',
  styleUrl: './pass-toggle-visibility.component.scss',
  host: {
    'class': 'emr-pass-toggle-visibility',
  }
})
export class PassToggleVisibilityComponent {
  visible = input(false, {
    transform: booleanAttribute
  });
  tabindex = input('');

  protected _visible = this.visible();

  get type() {
    return this._visible ? 'text' : 'password';
  }
}
