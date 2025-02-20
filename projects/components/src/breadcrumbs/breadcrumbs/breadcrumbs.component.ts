import { Component, TemplateRef, input, booleanAttribute, contentChild } from '@angular/core';
import { BreadcrumbItemDefDirective } from '../breadcrumb-item-def.directive';
import { BreadcrumbSeparatorDefDirective } from '../breadcrumb-separator-def.directive';
import { BreadcrumbActiveItemDefDirective } from '../breadcrumb-active-item-def.directive';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'emr-breadcrumbs',
  exportAs: 'emrBreadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrl: './breadcrumbs.component.scss',
  host: {
    'class': 'emr-breadcrumbs',
    '[class.last-item-as-link]': 'lastItemAsLink()'
  },
  imports: [NgTemplateOutlet]
})
export class BreadcrumbsComponent<T> {
  itemRef = contentChild.required(BreadcrumbItemDefDirective, {
    read: TemplateRef
  });
  activeItemRef = contentChild.required(BreadcrumbActiveItemDefDirective, {
    read: TemplateRef
  });
  separatorRef = contentChild.required(BreadcrumbSeparatorDefDirective, {
    read: TemplateRef
  });
  dataSource = input<T[]>([]);
  lastItemAsLink = input(false, {
    transform: booleanAttribute
  });
}
