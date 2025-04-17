import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  contentChildren,
  ElementRef, forwardRef,
  inject,
  input,
  output,
  SimpleChanges,
} from '@angular/core';
import {
  SidebarNavItemComponent
} from '../sidebar-nav-item/sidebar-nav-item.component';
import { SIDEBAR_NAVIGATION } from '../types';
import { SidebarNavStore } from '../sidebar.store';

@Component({
  selector: 'emr-sidebar-nav',
  exportAs: 'emrSidebarNav',
  templateUrl: './sidebar-nav.component.html',
  styleUrl: './sidebar-nav.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: SIDEBAR_NAVIGATION,
      useExisting: forwardRef(() => SidebarNavComponent),
    },
    SidebarNavStore
  ],
  host: {
    'class': 'emr-sidebar-nav',
  },
})
export class SidebarNavComponent {
  private _elementRef = inject(ElementRef);
  private _navStore = inject(SidebarNavStore);

  readonly _items = contentChildren(SidebarNavItemComponent, { descendants: true });

  activeKey = input();

  readonly itemClicked = output<any>();

  constructor() {
    // scroll to the active item if it is not visible in the viewport
    afterNextRender(() => {
      this._items().forEach((item: SidebarNavItemComponent) => {
        if (item.active) {
          let parentElement = this._elementRef.nativeElement.parentNode || null;
          const itemElement = item._hostElement.nativeElement as HTMLElement;

          while (parentElement !== null) {
            if (this._hasScroll(parentElement)) {
              if (!this._isScrolledIntoView(itemElement, parentElement)) {
                const parentRect = parentElement.getBoundingClientRect();
                const elementRect = itemElement.getBoundingClientRect();
                parentElement.scrollTop = elementRect.top - parentRect.height / 2;
              }

              parentElement = null;
            } else {
              parentElement = parentElement.parentNode || null;
            }
          }
        }
      });
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['activeKey']) {
      this._navStore.setItemActiveKey(changes['activeKey'].currentValue);
    }
  }

  private _hasScroll(element: HTMLElement): boolean {
    if (!element.getBoundingClientRect()) {
      return false;
    }

    return Math.ceil(element.scrollHeight) > Math.ceil(element.getBoundingClientRect().height);
  }

  private _isScrolledIntoView(element: HTMLElement, parent: HTMLElement) {
    const elementRect = element.getBoundingClientRect();
    const parentRect = parent.getBoundingClientRect();
    return (elementRect.top >= 0) && (elementRect.bottom <= parentRect.height);
  }
}
