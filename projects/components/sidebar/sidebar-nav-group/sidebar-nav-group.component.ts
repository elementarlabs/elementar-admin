import {
  AfterContentInit,
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  contentChild,
  contentChildren, forwardRef, inject, InjectionToken,
} from '@angular/core';
import { SidebarNavApiService } from '../sidebar-nav-api.service';
import { SidebarNavGroupToggleComponent } from '../sidebar-nav-group-toggle/sidebar-nav-group-toggle.component';

export const SIDEBAR_NAVIGATION_GROUP = new InjectionToken('SIDEBAR_NAVIGATION_GROUP');

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
  private _cdr = inject(ChangeDetectorRef);
  private _api = inject(SidebarNavApiService);

  private _toggle = contentChild.required(SidebarNavGroupToggleComponent, {
    descendants: false,
  });
  readonly _groupId = Math.random();

  ngAfterContentInit() {
    this._toggle().for.set(this._groupId);
  }
}
