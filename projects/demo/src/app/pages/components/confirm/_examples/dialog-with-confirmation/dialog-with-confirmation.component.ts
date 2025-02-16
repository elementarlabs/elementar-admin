import { Component, inject } from '@angular/core';
import {
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from '@angular/material/dialog';
import { ConfirmManager } from '@elementar-ui/components';
import { MatButton } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dialog-with-confirmation',
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatButton,
  ],
  templateUrl: './dialog-with-confirmation.component.html',
  styleUrl: './dialog-with-confirmation.component.scss'
})
export class DialogWithConfirmationComponent {
  private _snackBar = inject(MatSnackBar);
  private _confirmManager = inject(ConfirmManager);

  constructor(
    public dialogRef: MatDialogRef<any>
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  open() {
    const confirmDef = this._confirmManager.open({
      title: 'Confirm unpublish',
      description: 'You are about to unpublish all Posts in the selection. Are you sure?'
    });
    confirmDef.canceled.subscribe(() => {
      this._snackBar.open('Cancelled!', 'OK');
    });
    confirmDef.confirmed.subscribe(() => {
      this._snackBar.open('Confirmed!', 'OK');
    });
  }
}
