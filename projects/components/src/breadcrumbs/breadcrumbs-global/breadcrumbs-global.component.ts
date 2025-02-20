import { booleanAttribute, Component, computed, inject, input } from '@angular/core';
import {
  BreadcrumbItemComponent, BreadcrumbsComponent,
  BreadcrumbSeparatorComponent, BreadcrumbsStore,
  BreadcrumbTitleComponent
} from '@elementar-ui/components';
import { Breadcrumb } from '../types';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'emr-breadcrumbs-global',
  imports: [
    BreadcrumbItemComponent,
    BreadcrumbSeparatorComponent,
    BreadcrumbTitleComponent,
    BreadcrumbsComponent,
    RouterLink
  ],
  templateUrl: './breadcrumbs-global.component.html',
  styleUrl: './breadcrumbs-global.component.scss'
})
export class BreadcrumbsGlobalComponent {
  private _breadcrumbsStore = inject(BreadcrumbsStore);

  breadcrumbs = computed<Breadcrumb[]>(() => {
    return this._breadcrumbsStore.breadcrumbs();
  });
  lastItemAsLink = input(false, {
    transform: booleanAttribute
  });
  separator = input('/');
}
