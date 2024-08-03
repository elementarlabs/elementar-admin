import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadAreaComponent } from './upload-area/upload-area.component';
import { FileListComponent } from './file-list/file-list.component';
import { FileComponent } from './file/file.component';
import { FileControlComponent } from './file-control/file-control.component';

@NgModule({
  declarations: [
    UploadAreaComponent,
    FileListComponent,
    FileComponent,
    FileControlComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UploadAreaComponent,
    FileListComponent,
    FileComponent,
    FileControlComponent
  ]
})
export class EmrUploadModule { }
