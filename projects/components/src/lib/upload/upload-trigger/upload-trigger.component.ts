import { Component, DestroyRef, EventEmitter, HostListener, inject, Input, Output, Renderer2 } from '@angular/core';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { UploadSelectedEvent } from '../properties';
import { fromEvent } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'emr-upload-trigger,[emr-upload-trigger]',
  exportAs: 'emrUploadTrigger',
  templateUrl: './upload-trigger.component.html',
  styleUrls: ['./upload-trigger.component.css'],
  host: {
    'class': 'emr-upload-trigger'
  }
})
export class UploadTriggerComponent {
  protected _renderer = inject(Renderer2);
  private _destroyRef = inject(DestroyRef);

  @Input() accept!: string;
  @Input()
  set multiple(value: BooleanInput) {
    this._multiple = coerceBooleanProperty(value);
  }
  get multiple(): boolean {
    return this._multiple;
  }
  private _multiple = false;

  @Output() readonly selected = new EventEmitter<UploadSelectedEvent>();

  @HostListener('click')
  private _handleClick() {
    const element: HTMLInputElement = this._renderer.createElement('input');
    this._renderer.setAttribute(element, 'type', 'file');

    if (this.accept) {
      this._renderer.setAttribute(element, 'accept', this.accept);
    }

    if (this._multiple) {
      this._renderer.setAttribute(element, 'multiple', '');
    }

    fromEvent(element, 'change')
      .pipe(takeUntilDestroyed(this._destroyRef))
      .subscribe(event => {
        const files: File[] = [];

        if (element.files) {
          for (let i = 0; i < element.files.length; i++) {
            files.push(element.files[i]);
          }
        }

        this.selected.emit({
          multiple: this._multiple,
          fileList: element.files,
          event,
          files
        });
      })
    ;

    element.click();
  }
}
