import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentFadeComponent } from './public-api';

@NgModule({
  declarations: [
    ContentFadeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ContentFadeComponent
  ]
})
export class EmrContentFadeModule { }
