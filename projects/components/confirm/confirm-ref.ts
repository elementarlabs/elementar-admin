import { EventEmitter } from '@angular/core';

export class ConfirmRef {
  readonly canceled = new EventEmitter();
  readonly confirmed = new EventEmitter();
  readonly closed = new EventEmitter();

  close(): void {
    this.closed.emit();
  }

  cancel(): void {
    this.canceled.emit();
    this.close();
  }

  confirm(): void {
    this.confirmed.emit();
    this.close();
  }
}
