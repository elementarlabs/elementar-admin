import { booleanAttribute, Component, input } from '@angular/core';
import { LAYOUT } from '../types';

let nextId = 0;

@Component({
  selector: 'emr-layout',
  exportAs: 'emrLayout',
  standalone: true,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  providers: [
    {
      provide: LAYOUT,
      useExisting: LayoutComponent
    }
  ],
  host: {
    'class': 'emr-layout',
    '[class.is-window-mode]': 'windowMode()'
  }
})
export class LayoutComponent {
  layoutId = input<string>(`layout-${nextId++}`);
  windowMode = input(false, {
    transform: booleanAttribute
  });
}
