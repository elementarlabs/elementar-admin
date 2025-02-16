import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { UploadFileSelectedEvent, UploadTriggerDirective } from '@elementar-ui/components';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-basic-upload-example',
  imports: [
    MatButton,
    JsonPipe,
    UploadTriggerDirective
  ],
  templateUrl: './basic-upload-example.component.html',
  styleUrl: './basic-upload-example.component.scss'
})
export class BasicUploadExampleComponent {
  files: any = [];

  onFileSelected(event: UploadFileSelectedEvent) {
    this.files = event.files.map(rawFile => {
      return {
        name: rawFile.name,
        size: rawFile.size
      }
    });
  }
}
