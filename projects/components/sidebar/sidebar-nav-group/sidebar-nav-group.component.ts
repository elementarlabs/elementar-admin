import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  contentChild,
  forwardRef,
} from '@angular/core';
import { SidebarNavGroupToggleComponent } from '../sidebar-nav-group-toggle/sidebar-nav-group-toggle.component';
import { SIDEBAR_NAVIGATION_GROUP } from '../types';

@Component({
  selector: 'emr-sidebar-nav-group',
  templateUrl: './sidebar-nav-group.component.html',
  styleUrl: './sidebar-nav-group.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: SIDEBAR_NAVIGATION_GROUP,
      useExisting: forwardRef(() => SidebarNavGroupComponent),
    }
  ]
})
export class SidebarNavGroupComponent implements AfterContentInit {
  private _toggle = contentChild.required(SidebarNavGroupToggleComponent, {
    descendants: false,
  });
  readonly _groupId = Math.random();

  ngAfterContentInit() {
    this._toggle().for.set(this._groupId);
  }
}
