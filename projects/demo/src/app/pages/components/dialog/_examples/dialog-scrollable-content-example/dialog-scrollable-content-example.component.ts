import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { DialogScrollableContentDialog } from '../dialog-scrollable-content/dialog-scrollable-content.dialog';

@Component({
    selector: 'app-dialog-scrollable-content-example',
    imports: [
        MatButton
    ],
    templateUrl: './dialog-scrollable-content-example.component.html',
    styleUrl: './dialog-scrollable-content-example.component.scss'
})
export class DialogScrollableContentExampleComponent {
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    this.dialog.open(DialogScrollableContentDialog);
  }
}
