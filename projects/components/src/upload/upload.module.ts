import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadAreaComponent } from './upload-area/upload-area.component';
import { FileListComponent } from './file-list/file-list.component';
import { FileComponent } from './file/file.component';
import { FileControlComponent } from './file-control/file-control.component';

@NgModule({
    imports: [
        CommonModule,
        UploadAreaComponent,
        FileListComponent,
        FileComponent,
        FileControlComponent
    ],
    exports: [
        UploadAreaComponent,
        FileListComponent,
        FileComponent,
        FileControlComponent
    ]
})
export class EmrUploadModule { }
