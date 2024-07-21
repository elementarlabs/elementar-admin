import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SegmentedComponent } from './segmented/segmented.component';
import { SegmentedButtonComponent } from './segmented-button/segmented-button.component';
import { SegmentedIconDirective } from './segmented-icon.directive';

@NgModule({
  declarations: [
    SegmentedComponent,
    SegmentedButtonComponent,
    SegmentedIconDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SegmentedComponent,
    SegmentedButtonComponent,
    SegmentedIconDirective
  ]
})
export class EmrSegmentedModule { }
