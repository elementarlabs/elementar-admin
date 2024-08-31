import { Component, forwardRef, input } from '@angular/core';
import { RAIL_NAV } from '@elementar/components/rail-nav/types';

@Component({
  selector: 'emr-rail-nav',
  exportAs: 'emrRailNav',
  standalone: true,
  imports: [],
  templateUrl: './rail-nav.component.html',
  styleUrl: './rail-nav.component.scss',
  providers: [
    {
      provide: RAIL_NAV,
      useExisting: forwardRef(() => RailNavComponent),
    }
  ],
  host: {
    class: 'emr-rail-nav'
  }
})
export class RailNavComponent {
  activeKey = input();
}
