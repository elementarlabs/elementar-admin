import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpandComponent } from './expand/expand.component';
import { ExpandButtonComponent } from './expand-button/expand-button.component';

@NgModule({
  declarations: [
    ExpandComponent,
    ExpandButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ExpandComponent,
    ExpandButtonComponent
  ]
})
export class EmrExpandModule { }
