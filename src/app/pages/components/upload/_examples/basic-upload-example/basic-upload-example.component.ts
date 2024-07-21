import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { EmrUploadModule, UploadSelectedEvent } from '@elementar/components/upload';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-basic-upload-example',
  standalone: true,
  imports: [
    MatButton,
    EmrUploadModule,
    JsonPipe
  ],
  templateUrl: './basic-upload-example.component.html',
  styleUrl: './basic-upload-example.component.scss'
})
export class BasicUploadExampleComponent {
  files: any = [];

  selected(event: UploadSelectedEvent) {
    this.files = event.files.map(rawFile => {
      return {
        name: rawFile.name,
        size: rawFile.size
      }
    });
  }
}
