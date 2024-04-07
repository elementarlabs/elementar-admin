import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { File } from '../file-list-example/file-list-example.component';
import { FilesGridComponent } from '@components/upload/files-grid/files-grid.component';
import { GridFileComponent } from '@components/upload/grid-file/grid-file.component';

@Component({
  selector: 'app-file-grid-example',
  standalone: true,
  imports: [
    MatIcon,
    FilesGridComponent,
    GridFileComponent
  ],
  templateUrl: './file-grid-example.component.html',
  styleUrl: './file-grid-example.component.scss'
})
export class FileGridExampleComponent {
  fileList: File[] = [
    {
      name: 'Annual Report.docx',
      state: 'uploaded',
      processing: false
    },
    {
      name: 'Workflow.pdf',
      state: 'uploading',
      processing: false,
      remainingTime: '(remaining time: 00:2:01)',
      size: '11MB',
      progress: 60
    },
    {
      name: 'Financials.xlsx',
      state: 'error',
      errorMessage: 'An error occurred'
    }
  ];

  delete(index: number) {
    this.fileList.splice(index, 1);
  }
}
