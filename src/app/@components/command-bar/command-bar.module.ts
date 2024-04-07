import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommandBarComponent } from './command-bar/command-bar.component';
import { CommandBarCommandComponent } from './command-bar-command/command-bar-command.component';
import { CommandBarSeparatorComponent } from './command-bar-separator/command-bar-separator.component';
import { CommandBarValueComponent } from './command-bar-value/command-bar-value.component';

@NgModule({
  declarations: [
    CommandBarComponent,
    CommandBarCommandComponent,
    CommandBarSeparatorComponent,
    CommandBarValueComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommandBarComponent,
    CommandBarCommandComponent,
    CommandBarSeparatorComponent,
    CommandBarValueComponent
  ]
})
export class EmrCommandBarModule { }
