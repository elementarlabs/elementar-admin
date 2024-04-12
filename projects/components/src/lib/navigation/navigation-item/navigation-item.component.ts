import {
  booleanAttribute,
  Component, ContentChild, ElementRef,
  HostListener,
  inject,
  Input
} from '@angular/core';
import { NavigationApiService } from '../navigation-api.service';
import { NavigationItemIconDirective } from '../navigation-item-icon.directive';

@Component({
  selector: 'emr-navigation-item,[emr-navigation-item]',
  exportAs: 'emrNavigationItem',
  templateUrl: './navigation-item.component.html',
  styleUrls: ['./navigation-item.component.css'],
  host: {
    'class': 'emr-navigation-item',
    '[class.is-active]': 'forceActive || active'
  }
})
export class NavigationItemComponent {
  private _api = inject(NavigationApiService);
  private _elementRef = inject(ElementRef);

  @ContentChild(NavigationItemIconDirective)
  iconRef!: NavigationItemIconDirective;

  get api() {
    return {
      isActive: () => this.active
    }
  }

  @Input()
  key: any = Math.random();

  @Input({ transform: booleanAttribute })
  forceActive = false;

  @HostListener('click', ['$event'])
  click(event: MouseEvent) {
    if (!this.key) {
      return;
    }

    this._api.activateItem(this.key);
  }

  get active(): boolean {
    return this._api.isItemActive(this.key);
  }

  get _hostElement(): ElementRef {
    return this._elementRef;
  }
}
