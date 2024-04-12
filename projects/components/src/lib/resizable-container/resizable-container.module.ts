import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResizableContainerComponent } from './resizable-container/resizable-container.component';

@NgModule({
  declarations: [
    ResizableContainerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ResizableContainerComponent
  ]
})
export class EmrResizableContainerModule { }
