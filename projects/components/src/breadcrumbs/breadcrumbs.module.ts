import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { BreadcrumbItemComponent } from './breadcrumb-item/breadcrumb-item.component';
import { BreadcrumbSeparatorComponent } from './breadcrumb-separator/breadcrumb-separator.component';
import { BreadcrumbItemDefDirective } from './breadcrumb-item-def.directive';
import { BreadcrumbSeparatorDefDirective } from './breadcrumb-separator-def.directive';
import { BreadcrumbActiveItemDefDirective } from './breadcrumb-active-item-def.directive';

@NgModule({
    imports: [
        CommonModule,
        BreadcrumbsComponent,
        BreadcrumbItemComponent,
        BreadcrumbSeparatorComponent,
        BreadcrumbSeparatorDefDirective,
        BreadcrumbItemDefDirective,
        BreadcrumbActiveItemDefDirective
    ],
    exports: [
        BreadcrumbsComponent,
        BreadcrumbItemComponent,
        BreadcrumbSeparatorComponent,
        BreadcrumbSeparatorDefDirective,
        BreadcrumbItemDefDirective,
        BreadcrumbActiveItemDefDirective
    ]
})
export class EmrBreadcrumbsModule { }
