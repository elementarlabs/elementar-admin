import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterBuilderComponent } from './filter-builder/filter-builder.component';
import { FilterBuilderOperationDefDirective } from './filter-builder-operation-def.directive';
import { FilterBuilderOperationNameDirective } from './filter-builder-operation-name.directive';
import { FilterBuilderOperationIconDirective } from './filter-builder-operation-icon.directive';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { MatAutocomplete, MatAutocompleteTrigger, MatOption } from '@angular/material/autocomplete';
import { FormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { MatFormField, MatInput } from '@angular/material/input';
import { MatSelect } from '@angular/material/select';
import { AutoFocusDirective, FocusElementDirective, MenuOptionGroupDirective } from '@elementar/components/core';

@NgModule({
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
        FocusElementDirective,
        MatSelect,
        MatAutocompleteTrigger,
        MatAutocomplete,
        FilterBuilderComponent,
        FilterBuilderOperationDefDirective,
        FilterBuilderOperationNameDirective,
        FilterBuilderOperationIconDirective
    ],
    exports: [
        FilterBuilderComponent,
        FilterBuilderOperationDefDirective,
        FilterBuilderOperationNameDirective,
        FilterBuilderOperationIconDirective
    ]
})
export class EmrFilterBuilderModule { }
