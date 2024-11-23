import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-basic-snackbar-example',
    imports: [
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule
    ],
    templateUrl: './basic-snackbar-example.component.html',
    styleUrl: './basic-snackbar-example.component.scss'
})
export class BasicSnackbarExampleComponent {
  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
