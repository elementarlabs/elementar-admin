import { Component, inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from '@angular/material/dialog';
import { ConfirmManager } from '@elementar/components/confirm';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-dialog-with-confirmation',
  standalone: true,
  imports:[
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatButton,
  ],
  templateUrl: './dialog-with-confirmation.component.html',
  styleUrl: './dialog-with-confirmation.component.scss'
})
export class DialogWithConfirmationComponent {
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
      console.log('Cancelled!');
    });
    confirmDef.confirmed.subscribe(() => {
      console.log('Confirmed!');
    });
  }
}
