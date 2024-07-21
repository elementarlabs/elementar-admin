import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from './avatar/avatar.component';
import { AvatarGroupComponent } from './avatar-group/avatar-group.component';
import { AvatarTotalComponent } from './avatar-total/avatar-total.component';

@NgModule({
  declarations: [
    AvatarComponent,
    AvatarGroupComponent,
    AvatarTotalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AvatarComponent,
    AvatarGroupComponent,
    AvatarTotalComponent
  ]
})
export class EmrAvatarModule { }
