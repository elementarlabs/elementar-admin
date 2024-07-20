import { EventEmitter } from '@angular/core';

export class PictureRef {
  readonly closed = new EventEmitter();

  close(): void {
    this.closed.emit();
  }
}
