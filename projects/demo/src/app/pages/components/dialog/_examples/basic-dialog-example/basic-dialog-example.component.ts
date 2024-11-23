import { Component } from '@angular/core';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { BasicDialog } from '../basic/basic.dialog';
import { MatInput } from '@angular/material/input';

@Component({
    selector: 'app-basic-dialog-example',
    imports: [
        MatLabel,
        FormsModule,
        MatFormField,
        MatButton,
        MatInput
    ],
    templateUrl: './basic-dialog-example.component.html',
    styleUrl: './basic-dialog-example.component.scss'
})
export class BasicDialogExampleComponent {
  animal: string;
  name: string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(BasicDialog, {
      data: { name: this.name, animal: this.animal },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}
