import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopoverComponent } from './popover/popover.component';
import { PopoverTriggerForDirective } from './popover-trigger-for.directive';
import { PopoverOriginDirective } from './popover-origin.directive';

@NgModule({
  declarations: [
    PopoverComponent,
    PopoverTriggerForDirective,
    PopoverOriginDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PopoverComponent,
    PopoverTriggerForDirective,
    PopoverOriginDirective
  ]
})
export class EmrPopoverModule { }
