import {
  booleanAttribute,
  Component, ElementRef,
  HostListener,
  inject,
  Input,
  contentChild, TemplateRef
} from '@angular/core';
import { NavigationApiService } from '../navigation-api.service';
import { NavigationItemIconDirective } from '../navigation-item-icon.directive';
import { MatRipple } from '@angular/material/core';
import { NgTemplateOutlet } from '@angular/common';

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
    '[class.is-active]': 'forceActive || active'
  }
})
export class NavigationItemComponent {
  private _api = inject(NavigationApiService);
  private _elementRef = inject(ElementRef);

  readonly iconRef = contentChild(NavigationItemIconDirective);

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

  protected get iconRefTemplate(): TemplateRef<any> {
    return this.iconRef()?.templateRef as TemplateRef<any>;
  }
}
