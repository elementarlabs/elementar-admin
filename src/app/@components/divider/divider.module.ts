import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DividerComponent } from '@components/divider/divider/divider.component';

@NgModule({
  declarations: [
    DividerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DividerComponent
  ]
})
export class EmrDividerModule { }
