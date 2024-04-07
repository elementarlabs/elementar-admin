import { Component } from '@angular/core';
import { EmrUploadModule, UploadSelectedEvent } from '@components/upload';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-upload-area-example',
  standalone: true,
  imports: [
    EmrUploadModule,
    JsonPipe
  ],
  templateUrl: './upload-area-example.component.html',
  styleUrl: './upload-area-example.component.scss'
})
export class UploadAreaExampleComponent {
  files: any[] = [];

  selected(event: UploadSelectedEvent): void {
    this.files = event.files.map(rawFile => {
      return {
        name: rawFile.name,
        size: rawFile.size
      }
    });
  }
}
