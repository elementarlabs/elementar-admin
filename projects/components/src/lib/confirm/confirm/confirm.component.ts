import { Component, inject } from '@angular/core';
import { CONFIRM_DATA, CONFIRM_REF, ConfirmOptions } from '../types';
import { MatButton } from '@angular/material/button';
import { ConfirmRef } from '../confirm-ref';

@Component({
  selector: 'emr-confirm',
  exportAs: 'emrConfirm',
  standalone: true,
  imports: [
    MatButton
  ],
  templateUrl: './confirm.component.html',
  styleUrl: './confirm.component.scss',
  host: {
    'class': 'emr-confirm'
  }
})
export class ConfirmComponent {
  private _data = inject<ConfirmOptions>(CONFIRM_DATA);
  private _confirmRef = inject<ConfirmRef>(CONFIRM_REF);

  title = this._data.title;
  description = this._data.description;

  cancel(): void {
    this._confirmRef.cancel();
  }

  confirm(): void {
    this._confirmRef.confirm();
  }
}
