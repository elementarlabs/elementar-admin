import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnouncementComponent } from './announcement/announcement.component';
import { MatIcon } from '@angular/material/icon';

@NgModule({
    imports: [
        CommonModule,
        MatIcon,
        AnnouncementComponent
    ],
    exports: [
        AnnouncementComponent
    ]
})
export class EmrAnnouncementModule { }
