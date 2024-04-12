import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { NavigationItemComponent } from './navigation-item/navigation-item.component';
import { NavigationHeadingComponent } from './navigation-heading/navigation-heading.component';
import { NavigationDividerComponent } from './navigation-divider/navigation-divider.component';
import { NavigationGroupComponent } from './navigation-group/navigation-group.component';
import { NavigationGroupToggleComponent } from './navigation-group-toggle/navigation-group-toggle.component';
import { NavigationGroupMenuComponent } from './navigation-group-menu/navigation-group-menu.component';
import { NavigationItemIconDirective } from './navigation-item-icon.directive';
import { NavigationGroupToggleIconDirective } from './navigation-group-toggle-icon.directive';

@NgModule({
  declarations: [
    NavigationComponent,
    NavigationItemComponent,
    NavigationHeadingComponent,
    NavigationDividerComponent,
    NavigationGroupComponent,
    NavigationGroupToggleComponent,
    NavigationGroupMenuComponent,
    NavigationItemIconDirective,
    NavigationGroupToggleIconDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavigationComponent,
    NavigationItemComponent,
    NavigationHeadingComponent,
    NavigationDividerComponent,
    NavigationGroupComponent,
    NavigationGroupToggleComponent,
    NavigationGroupMenuComponent,
    NavigationItemIconDirective,
    NavigationGroupToggleIconDirective
  ]
})
export class EmrNavigationModule { }
