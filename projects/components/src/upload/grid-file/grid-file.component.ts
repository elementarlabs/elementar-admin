import { Component, EventEmitter, input, Input, numberAttribute, output, Output } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { UploadFileState } from '../types';
import { GaugeComponent, GaugeValueComponent } from '../../gauge';

@Component({
  selector: 'emr-grid-file',
  exportAs: 'emrGridFile',
  imports: [
    MatIcon,
    MatIconButton,
    GaugeValueComponent,
    GaugeComponent
  ],
  templateUrl: './grid-file.component.html',
  styleUrl: './grid-file.component.scss',
  host: {
    'class': 'emr-grid-file'
  }
})
export class GridFileComponent {
  name = input.required();
  size = input();
  progress = input(0, {
    transform: numberAttribute
  });
  progressingMessage = input();
  errorMessage = input();
  remainingTime = input();
  state = input<UploadFileState>('uploading');

  readonly deleted = output<void>();

  delete(): void {
    this.deleted.emit();
  }
}
