import { Component } from '@angular/core';
import { EmrUploadModule, UploadFileSelectedEvent } from '@elementar/components/upload';
import { JsonPipe } from '@angular/common';

@Component({
    selector: 'app-upload-area-example',
    imports: [
        EmrUploadModule,
        JsonPipe
    ],
    templateUrl: './upload-area-example.component.html',
    styleUrl: './upload-area-example.component.scss'
})
export class UploadAreaExampleComponent {
  files: any[] = [];

  onFileSelected(event: UploadFileSelectedEvent): void {
    this.files = event.files.map(rawFile => {
      return {
        name: rawFile.name,
        size: rawFile.size
      }
    });
  }
}
