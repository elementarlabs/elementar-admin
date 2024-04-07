import { Component } from '@angular/core';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponentExampleComponent } from '../snackbar-component-example/snackbar-component-example.component';

@Component({
  selector: 'app-snackbar-with-custom-component-example',
  standalone: true,
  imports: [
    MatFormField,
    FormsModule,
    MatInput,
    MatButton,
    MatLabel
  ],
  templateUrl: './snackbar-with-custom-component-example.component.html',
  styleUrl: './snackbar-with-custom-component-example.component.scss'
})
export class SnackbarWithCustomComponentExampleComponent {
  durationInSeconds = 5;

  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar() {
    this._snackBar.openFromComponent(SnackbarComponentExampleComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }
}
