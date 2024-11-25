import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { UploadFileState } from '../properties';
import { GaugeComponent, GaugeValueComponent } from '@elementar/components/gauge';

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
  styleUrl: './grid-file.component.scss'
})
export class GridFileComponent {
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

  @Output()
  readonly deleted = new EventEmitter();

  delete(): void {
    this.deleted.emit();
  }
}
