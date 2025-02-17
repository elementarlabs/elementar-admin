import { Component } from '@angular/core';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInput } from '@angular/material/input';

@Component({
    selector: 'app-error-messages-example',
    imports: [
        MatFormField,
        ReactiveFormsModule,
        MatInput,
        MatLabel,
        MatError
    ],
    templateUrl: './error-messages-example.component.html',
    styleUrl: './error-messages-example.component.scss'
})
export class ErrorMessagesExampleComponent {
  emailFormControl = new FormControl('', [
    Validators.required, Validators.email
  ]);
}
