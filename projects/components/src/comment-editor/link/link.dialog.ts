import { Component, inject, Inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from '@angular/material/dialog';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'emr-link',
  standalone: true,
  imports: [
    MatButton,
    MatDialogActions,
    MatDialogContent,
    MatDialogTitle,
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './link.dialog.html',
  styleUrl: './link.dialog.scss'
})
export class LinkDialog {
  private _dialogRef = inject(MatDialogRef);
  private _data = inject(MAT_DIALOG_DATA);
  linkUrl = this._data.linkUrl || '';

  onSubmit(): void {
    this._dialogRef.close(this.linkUrl);
  }
}
