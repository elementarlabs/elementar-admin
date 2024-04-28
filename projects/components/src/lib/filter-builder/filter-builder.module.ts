import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterBuilderComponent } from './filter-builder/filter-builder.component';
import { FilterBuilderOperationDefDirective } from './filter-builder-operation-def.directive';
import { FilterBuilderOperationNameDirective } from './filter-builder-operation-name.directive';
import { FilterBuilderOperationIconDirective } from './filter-builder-operation-icon.directive';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { MatOption } from '@angular/material/autocomplete';
import { FormsModule } from '@angular/forms';
import { MenuOptionGroupDirective } from '../menu-option-group.directive';
import { MatIcon } from '@angular/material/icon';
import { MatFormField, MatInput } from '@angular/material/input';
import { AutoFocusDirective } from '../_directives/auto-focus.directive';
import { FocusElementDirective } from '../_directives/focus-element.directive';

@NgModule({
  declarations: [
    FilterBuilderComponent,
    FilterBuilderOperationDefDirective,
    FilterBuilderOperationNameDirective,
    FilterBuilderOperationIconDirective
  ],
  imports: [
    CommonModule,
    MatMenu,
    MatOption,
    MatMenuTrigger,
    MatMenuItem,
    MenuOptionGroupDirective,
    FormsModule,
    MatIcon,
    MatInput,
    MatFormField,
    AutoFocusDirective,
    FocusElementDirective
  ],
  exports: [
    FilterBuilderComponent,
    FilterBuilderOperationDefDirective,
    FilterBuilderOperationNameDirective,
    FilterBuilderOperationIconDirective
  ]
})
export class EmrFilterBuilderModule { }
