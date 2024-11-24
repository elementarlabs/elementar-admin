import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PinInputComponent } from './pin-input/pin-input.component';
import { PinInputDirective } from './pin-input.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatFormField,
        MatInput,
        PinInputComponent,
        PinInputDirective
    ],
    exports: [
        PinInputComponent
    ]
})
export class EmrPinInputModule { }
