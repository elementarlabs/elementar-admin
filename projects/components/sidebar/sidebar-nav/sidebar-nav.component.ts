import {
  afterNextRender, ChangeDetectionStrategy,
  Component,
  contentChild,
  contentChildren,
  ElementRef, forwardRef,
  inject,
  input,
  output, Renderer2, SimpleChanges,
  TemplateRef
} from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MatBadge } from '@angular/material/badge';
import { OrderByPipe } from '@elementar-ui/components/core';
import { SidebarNavItemIconDirective } from '../sidebar-nav-item-icon.directive';
import { NgComponentOutlet, NgTemplateOutlet } from '@angular/common';
import {
  SidebarNavGroupComponent,
  SidebarNavGroupMenuComponent,
  SidebarNavGroupToggleComponent, SidebarNavHeadingComponent,
  SidebarNavItemBadgeDirective,
  SidebarNavItemComponent,
  SidebarNavItemDefDirective
} from '@elementar-ui/components/sidebar';
import {
  SidebarNavGroupToggleIconDirective
} from '@elementar-ui/components/sidebar/sidebar-nav-group-toggle-icon.directive';
import { SidebarNavApiService } from '@elementar-ui/components/sidebar/sidebar-nav-api.service';
import { NAVIGATION } from '@elementar-ui/components/sidebar/types';

@Component({
  selector: 'emr-sidebar-nav',
  exportAs: 'emrSidebarNav',
  imports: [
    NgComponentOutlet,
    NgTemplateOutlet
  ],
  styleUrl: './sidebar-nav.component.scss',
  templateUrl: './sidebar-nav.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NAVIGATION,
      useExisting: forwardRef(() => SidebarNavComponent),
    },
    SidebarNavApiService
  ],
  host: {
    'class': 'emr-sidebar-nav',
  },
})
export class SidebarNavComponent<T extends any> {
  readonly api = inject(SidebarNavApiService);
  private _elementRef = inject(ElementRef);
  private _renderer = inject(Renderer2);

  private _navItemDefs = contentChildren(SidebarNavItemDefDirective);

  protected _itemIconRef = contentChild(SidebarNavItemIconDirective);

  activeKey = input();
  navItems = input<T[]>([]);

  readonly itemClicked = output<any>();

  get iconTemplateRef(): TemplateRef<any> {
    return this._itemIconRef()?.templateRef as TemplateRef<any>;
  }

  readonly _items = contentChildren(SidebarNavItemComponent, { descendants: true });

  theme = input();

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
      this.api.activateItem(changes['activeKey'].currentValue);
    }

    if (changes['theme']) {
      this._renderer.setAttribute(this._elementRef.nativeElement, 'data-theme', changes['theme'].currentValue);
    }
  }

  getTemplate(item: any): TemplateRef<any> {
    for (let navItemDef of this._navItemDefs()) {
      const isFn = navItemDef.emrSidebarNavItemDefIs();

      if (isFn && isFn(item)) {
        return navItemDef.templateRef;
      }
    }

    return this._navItemDefs()[0].templateRef;
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
