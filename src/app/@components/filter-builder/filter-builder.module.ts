import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterBuilderComponent } from './filter-builder/filter-builder.component';
import { FilterBuilderAddDirective } from './filter-builder-add.directive';
import { FilterBuilderRemoveDirective } from './filter-builder-remove.directive';
import { FilterBuilderOperationDefDirective } from './filter-builder-operation-def.directive';
import { FilterBuilderOperationNameDirective } from './filter-builder-operation-name.directive';
import { FilterBuilderOperationIconDirective } from './filter-builder-operation-icon.directive';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { MatOption } from '@angular/material/autocomplete';
import { MenuOptionGroupDirective } from '@components/menu-option-group.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FilterBuilderComponent,
    FilterBuilderAddDirective,
    FilterBuilderRemoveDirective,
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
    FormsModule
  ],
  exports: [
    FilterBuilderComponent,
    FilterBuilderAddDirective,
    FilterBuilderRemoveDirective,
    FilterBuilderOperationDefDirective,
    FilterBuilderOperationNameDirective,
    FilterBuilderOperationIconDirective
  ]
})
export class EmrFilterBuilderModule { }
