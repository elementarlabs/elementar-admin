import { Component } from '@angular/core';
import { MatFormField, MatLabel, MatSuffix } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { MatInput } from '@angular/material/input';

@Component({
    selector: 'app-clear-button-example',
    imports: [
        MatFormField,
        FormsModule,
        MatIcon,
        MatIconButton,
        MatInput,
        MatLabel,
        MatSuffix
    ],
    templateUrl: './clear-button-example.component.html',
    styleUrl: './clear-button-example.component.scss'
})
export class ClearButtonExampleComponent {
  value = 'Clear me';
}
