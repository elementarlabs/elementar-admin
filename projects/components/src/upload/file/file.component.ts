import { Component, Input } from '@angular/core';
import { UploadFileState } from '../types';

@Component({
  selector: 'emr-file',
  exportAs: 'emrFile',
  templateUrl: './file.component.html',
  styleUrl: './file.component.scss',
  host: {
    'class': 'emr-file'
  }
})
export class FileComponent {
  @Input()
  name!: string | number;

  @Input()
  size!: string | unknown;

  @Input()
  progress!: number | unknown;

  @Input()
  progressingMessage!: string | unknown;

  @Input()
  errorMessage!: string | unknown;

  @Input()
  remainingTime!: string | unknown;

  @Input()
  state: UploadFileState = 'uploading';
}
