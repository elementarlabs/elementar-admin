import { booleanAttribute, Component, computed, inject, input } from '@angular/core';
import { Breadcrumb } from '../types';
import { RouterLink } from '@angular/router';
import { BreadcrumbItemComponent } from '../breadcrumb-item/breadcrumb-item.component';
import { BreadcrumbSeparatorComponent } from '../breadcrumb-separator/breadcrumb-separator.component';
import { BreadcrumbTitleComponent } from '../breadcrumb-title/breadcrumb-title.component';
import { BreadcrumbsComponent } from '../breadcrumbs/breadcrumbs.component';
import { BreadcrumbsStore } from '../breadcrumbs.store';

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
