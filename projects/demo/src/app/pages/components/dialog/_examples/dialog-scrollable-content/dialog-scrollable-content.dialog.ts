import { Component } from '@angular/core';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';

@Component({
    selector: 'app-dialog-scrollable-content',
    imports: [
        MatDialogActions,
        MatButton,
        MatDialogClose,
        MatDialogContent,
        MatDialogTitle
    ],
    templateUrl: './dialog-scrollable-content.dialog.html',
    styleUrl: './dialog-scrollable-content.dialog.scss'
})
export class DialogScrollableContentDialog {

}
