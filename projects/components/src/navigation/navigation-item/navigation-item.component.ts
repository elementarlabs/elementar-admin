import {
  booleanAttribute,
  Component, ElementRef,
  inject,
  contentChild, TemplateRef, input
} from '@angular/core';
import { NavigationApiService } from '../navigation-api.service';
import { NavigationItemIconDirective } from '../navigation-item-icon.directive';
import { MatRipple } from '@angular/material/core';
import { NgTemplateOutlet } from '@angular/common';
import { NAVIGATION } from '../types';
import { NavigationComponent } from '../navigation/navigation.component';

@Component({
  selector: 'emr-navigation-item,[emr-navigation-item]',
  exportAs: 'emrNavigationItem',
  imports: [
    MatRipple,
    NgTemplateOutlet
  ],
  templateUrl: './navigation-item.component.html',
  styleUrl: './navigation-item.component.scss',
  host: {
    'class': 'emr-navigation-item',
    '[class.is-active]': 'forceActive() || active',
    '(click)': 'click($event)'
  }
})
export class NavigationItemComponent {
  private _navigation = inject<NavigationComponent>(NAVIGATION);
  private _api = inject(NavigationApiService);
  private _elementRef = inject(ElementRef);

  readonly iconRef = contentChild(NavigationItemIconDirective);

  get api() {
    return {
      isActive: () => this.active
    }
  }

  key = input<any>(Math.random());
  forceActive = input(false, {
    transform: booleanAttribute
  });

  click(event: MouseEvent) {
    if (!this.key()) {
      return;
    }

    this._navigation.itemClicked.emit(this.key());
    this._api.activateItem(this.key());
  }

  get active(): boolean {
    return this._api.isItemActive(this.key());
  }

  get _hostElement(): ElementRef {
    return this._elementRef;
  }

  protected get iconRefTemplate(): TemplateRef<any> {
    return this.iconRef()?.templateRef as TemplateRef<any>;
  }
}
