import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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

@Component({
  selector: 'emr-youtube',
  exportAs: 'emrYoutube',
  imports: [
    FormsModule,
    MatButton,
    MatDialogActions,
    MatDialogContent,
    MatDialogTitle,
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule
  ],
  templateUrl: './youtube.dialog.html',
  styleUrl: './youtube.dialog.scss'
})
export class YoutubeDialog {
  private _dialogRef = inject(MatDialogRef);
  private _data = inject(MAT_DIALOG_DATA);
  linkUrl = this._data.linkUrl || '';
  isUpdate = !!this._data.linkUrl;

  onSubmit(): void {
    this._dialogRef.close(this.linkUrl);
  }
}
