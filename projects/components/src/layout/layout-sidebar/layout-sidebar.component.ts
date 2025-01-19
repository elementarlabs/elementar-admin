import { booleanAttribute, Component, DestroyRef, inject, Input, OnInit } from '@angular/core';
import { LayoutApiService } from '../layout-api.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { LAYOUT, LayoutSidebarVisibilityChange } from '../types';
import { LayoutComponent } from '../layout/layout.component';

@Component({
  selector: 'emr-layout-sidebar',
  exportAs: 'emrLayoutSidebar',
  templateUrl: './layout-sidebar.component.html',
  styleUrl: './layout-sidebar.component.scss',
  host: {
    'class': 'emr-layout-sidebar',
    '[class.is-hidden]': 'hidden'
  }
})
export class LayoutSidebarComponent implements OnInit {
  private _parent = inject<LayoutComponent>(LAYOUT);
  private _destroyRef = inject(DestroyRef);
  private _layoutApi = inject(LayoutApiService);

  @Input({ transform: booleanAttribute })
  hidden = false;

  ngOnInit() {
    this._layoutApi
      .sidebarVisibility
      .pipe(
        takeUntilDestroyed(this._destroyRef)
      )
      .subscribe((event: LayoutSidebarVisibilityChange) => {
        if (event.layoutId !== this._parent.layoutId) {
          return;
        }

        this.hidden = event.hidden;
      })
    ;
  }
}
