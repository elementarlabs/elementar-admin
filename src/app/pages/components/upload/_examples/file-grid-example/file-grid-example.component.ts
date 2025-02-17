import { Component } from '@angular/core';
import { File } from '../file-list-example/file-list-example.component';
import { FilesGridComponent, GridFileComponent } from '@elementar-ui/components';

@Component({
  selector: 'app-file-grid-example',
  imports: [
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
