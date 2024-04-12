import {
  afterNextRender,
  Component, ContentChildren, ElementRef,
  inject, Input, QueryList, Renderer2
} from '@angular/core';
import { NavigationApiService } from '../navigation-api.service';
import { NavigationItemComponent } from '../navigation-item/navigation-item.component';

@Component({
  selector: 'emr-navigation',
  exportAs: 'emrNavigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  providers: [NavigationApiService],
  host: {
    class: 'emr-navigation'
  }
})
export class NavigationComponent {
  readonly api = inject(NavigationApiService);
  private _elementRef = inject(ElementRef);
  private _renderer = inject(Renderer2);

  @ContentChildren(NavigationItemComponent, { descendants: true })
  private _items!: QueryList<NavigationItemComponent>;

  @Input()
  set theme(theme: string) {
    this._renderer.setAttribute(this._elementRef.nativeElement, 'data-theme', theme);
  }

  constructor() {
    // scroll to the active item if it is not visible in the viewport
    afterNextRender(() => {
      this._items.forEach((item: NavigationItemComponent) => {
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

  @Input()
  set activeKey(key: any) {
    this.api.activateItem(key);
  }

  private _hasScroll(element: HTMLElement): boolean {
    if (!element.getBoundingClientRect) {
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
