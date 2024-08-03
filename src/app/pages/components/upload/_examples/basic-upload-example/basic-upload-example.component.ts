import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { EmrUploadModule, UploadSelectedEvent, UploadTriggerDirective } from '@elementar/components/upload';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-basic-upload-example',
  standalone: true,
  imports: [
    MatButton,
    EmrUploadModule,
    JsonPipe,
    UploadTriggerDirective
  ],
  templateUrl: './basic-upload-example.component.html',
  styleUrl: './basic-upload-example.component.scss'
})
export class BasicUploadExampleComponent {
  files: any = [];

  onFileSelected(event: UploadSelectedEvent) {
    this.files = event.files.map(rawFile => {
      return {
        name: rawFile.name,
        size: rawFile.size
      }
    });
  }
}
