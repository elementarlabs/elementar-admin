import { Component, Input } from '@angular/core';
import { UploadFileState } from '../properties';

@Component({
    selector: 'emr-file',
    exportAs: 'emrFile',
    templateUrl: './file.component.html',
    styleUrls: ['./file.component.scss'],
    host: {
        'class': 'emr-file'
    },
    standalone: false
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
