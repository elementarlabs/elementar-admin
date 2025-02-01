import { Component } from '@angular/core';
import { UploadAreaComponent, UploadFileSelectedEvent } from '@elementar-ui/components/upload';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-upload-area-example',
  imports: [
    JsonPipe,
    UploadAreaComponent
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
