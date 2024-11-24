import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResizableContainerComponent } from './resizable-container/resizable-container.component';

@NgModule({
    imports: [
        CommonModule,
        ResizableContainerComponent
    ],
    exports: [
        ResizableContainerComponent
    ]
})
export class EmrResizableContainerModule { }
