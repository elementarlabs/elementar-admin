import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import { AlertCloseDirective } from './alert-close.directive';
import { AlertTitleDirective } from './alert-title.directive';
import { AlertIconDirective } from './alert-icon.directive';
import { AlertActionDirective } from './alert-action.directive';

@NgModule({
  declarations: [
    AlertComponent,
    AlertCloseDirective,
    AlertTitleDirective,
    AlertIconDirective,
    AlertActionDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AlertComponent,
    AlertCloseDirective,
    AlertTitleDirective,
    AlertIconDirective,
    AlertActionDirective
  ]
})
export class EmrAlertModule { }
