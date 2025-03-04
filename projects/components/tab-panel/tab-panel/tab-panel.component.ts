import {
  booleanAttribute,
  Component, DestroyRef,
  inject,
  input,
  OnChanges, OnInit, output,
  SimpleChanges
} from '@angular/core';
import { TabPanelApiService } from '../tab-panel-api.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'emr-tab-panel',
  exportAs: 'emrTabPanel',
  templateUrl: './tab-panel.component.html',
  styleUrl: './tab-panel.component.scss',
  providers: [
    TabPanelApiService
  ],
  host: {
    'class': 'emr-tab-panel',
    '[class.is-hide-content-if-tab-not-selected]': 'hideContentIfTabNotSelected()',
    '[class.is-compact]': 'compact()',
  }
})
export class TabPanelComponent implements OnInit, OnChanges {
  private _destroyRef = inject(DestroyRef);
  readonly api = inject(TabPanelApiService);

  hideContentIfTabNotSelected = input(false, {
    transform: booleanAttribute
  });
  activeItemId = input<any>();
  compact = input(false, {
    transform: booleanAttribute
  });

  readonly itemIdChanged = output();

  ngOnInit() {
    this.api
      .itemIdChanged
      .pipe(takeUntilDestroyed(this._destroyRef))
      .subscribe(() => {
        this.itemIdChanged.emit();
      });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['activeItemId']) {
      this.api.activate(changes['activeItemId'].currentValue, false);
    }
  }
}
