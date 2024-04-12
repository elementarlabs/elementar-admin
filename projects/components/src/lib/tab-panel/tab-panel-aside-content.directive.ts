import {
  DestroyRef,
  Directive,
  inject,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';
import { TabPanelApiService } from './tab-panel-api.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TAB_PANEL_ASIDE } from './types';
import { TabPanelAsideComponent } from './tab-panel-aside/tab-panel-aside.component';

@Directive({
  selector: '[emrTabPanelAsideContent]',
  exportAs: 'emrTabPanelAsideContent'
})
export class TabPanelAsideContentDirective implements OnInit {
  private _aside = inject<TabPanelAsideComponent>(TAB_PANEL_ASIDE, { optional: true });
  private _api = inject(TabPanelApiService);
  private _templateRef = inject(TemplateRef);
  private _viewContainer = inject(ViewContainerRef);
  private _destroyRef = inject(DestroyRef);
  private _id: any = this._aside ? this._aside.nextId++ : null;

  @Input('emrTabPanelAsideContent')
  set id(id: any) {
    this._id = id;
  }

  ngOnInit() {
    if (this._api.isActive(this._id)) {
      this._show();
    } else {
      this._hide();
    }

    this._api.itemIdChange
      .pipe(takeUntilDestroyed(this._destroyRef))
      .subscribe(id => {
        if (this._id === id) {
          this._show();
        } else {
          this._hide();
        }
      })
    ;

  }

  private _show() {
    this._viewContainer.clear();
    this._viewContainer.createEmbeddedView(this._templateRef);
  }

  private _hide() {
    this._viewContainer.clear();
  }
}
