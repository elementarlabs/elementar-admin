import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  inject, input,
  Input, output,
  Output,
  Renderer2
} from '@angular/core';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { UploadSelectedEvent } from '../properties';

@Component({
  selector: 'emr-upload-area',
  exportAs: 'emrUploadArea',
  templateUrl: './upload-area.component.html',
  styleUrls: ['./upload-area.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'emr-upload-area',
    '[class.is-drop-active]': 'isDropActive'
  }
})
export class UploadAreaComponent {
  protected _renderer = inject(Renderer2);

  accept = input<string>();
  multiple = input(false, {
    transform: booleanAttribute
  });

  readonly fileSelected = output<UploadSelectedEvent>();

  protected isDropActive = false;

  get api() {
    return {
      isDropActive: this.isDropActive
    }
  }

  @HostListener('dragover', ['$event'])
  private _handleDragOver(event: any) {
    event.preventDefault();
  }

  @HostListener('dragenter', ['$event'])
  private _handleDragEnter(event: any) {
    this.isDropActive = true;
    event.preventDefault();
  }

  @HostListener('dragleave', ['$event'])
  private _handleDragLeave(event: DragEvent) {
    const relatedTarget = event.relatedTarget as HTMLElement;

    if (!relatedTarget.closest('.emr-upload-area')) {
      this.isDropActive = false;
    }

    event.preventDefault();
  }

  @HostListener('dragend', ['$event'])
  private _handleDragEnd(event: any) {
    this.isDropActive = false;
    event.preventDefault();
  }

  @HostListener('drop', ['$event'])
  private _handleDrop(event: DragEvent) {
    event.preventDefault();
    this.isDropActive = false;

    if (event.dataTransfer) {
      const files: File[] = [];

      if (files) {
        for (let i = 0; i < event.dataTransfer.files.length; i++) {
          files.push(event.dataTransfer.files[i]);
        }
      }

      this.fileSelected.emit({
        multiple: this.multiple(),
        fileList: event.dataTransfer.files,
        event,
        files
      });
    }
  }
}
