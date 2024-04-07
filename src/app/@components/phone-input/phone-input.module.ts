import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDivider } from '@angular/material/divider';
import { MatFormField, MatInput } from '@angular/material/input';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { MatRipple } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { SearchPipe } from '@components/phone-input/search.pipe';
import { PhoneInputComponent } from './phone-input/phone-input.component';
import { MatIcon } from '@angular/material/icon';

@NgModule({
  declarations: [
    PhoneInputComponent,
    SearchPipe
  ],
  imports: [
    CommonModule,
    MatDivider,
    MatInput,
    MatMenu,
    MatMenuItem,
    MatRipple,
    ReactiveFormsModule,
    FormsModule,
    MatMenuTrigger,
    MatButton,
    MatFormField,
    MatIcon
  ],
  exports: [
    PhoneInputComponent
  ]
})
export class EmrPhoneInputModule { }
