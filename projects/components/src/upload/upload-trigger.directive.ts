import {
  booleanAttribute,
  DestroyRef,
  Directive,
  HostListener,
  inject,
  input, output,
  Renderer2
} from '@angular/core';
import { UploadSelectedEvent } from './properties';
import { fromEvent } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Directive({
  selector: '[emrUploadTrigger]',
  exportAs: 'emrUploadTrigger',
  standalone: true
})
export class UploadTriggerDirective {
  protected _renderer = inject(Renderer2);
  protected _destroyRef = inject(DestroyRef);

  accept = input<string>();
  multiple = input(false, {
    transform: booleanAttribute
  });

  readonly fileSelected = output<UploadSelectedEvent>();

  @HostListener('click')
  private _handleClick() {
    const element: HTMLInputElement = this._renderer.createElement('input');
    this._renderer.setAttribute(element, 'type', 'file');

    if (this.accept()) {
      this._renderer.setAttribute(element, 'accept', this.accept() as string);
    }

    if (this.multiple()) {
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

        this.fileSelected.emit({
          multiple: this.multiple(),
          fileList: element.files,
          event,
          files
        });
      })
    ;
    element.click();
  }
}
