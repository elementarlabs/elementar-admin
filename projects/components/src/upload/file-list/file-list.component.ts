import { Component } from '@angular/core';

@Component({
  selector: 'emr-file-list',
  exportAs: 'emrFileList',
  templateUrl: './file-list.component.html',
  styleUrl: './file-list.component.scss',
  host: {
    'class': 'emr-file-list'
  }
})
export class FileListComponent {
}
