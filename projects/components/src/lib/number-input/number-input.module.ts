import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberInputComponent } from './number-input/number-input.component';
import { IncreaseControlDirective } from './increase-control.directive';
import { DecreaseControlDirective } from './decrease-control.directive';
import { NumberInputSuffixDirective } from './number-input-suffix.directive';
import { NumberInputPrefixDirective } from './number-input-prefix.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSuffix } from '@angular/material/form-field';
import { MatRipple } from '@angular/material/core';

@NgModule({
  declarations: [
    NumberInputComponent,
    IncreaseControlDirective,
    DecreaseControlDirective,
    NumberInputPrefixDirective,
    NumberInputSuffixDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSuffix,
    MatRipple
  ],
  exports: [
    NumberInputComponent,
    IncreaseControlDirective,
    DecreaseControlDirective,
    NumberInputPrefixDirective,
    NumberInputSuffixDirective
  ]
})
export class EmrNumberInputModule { }
