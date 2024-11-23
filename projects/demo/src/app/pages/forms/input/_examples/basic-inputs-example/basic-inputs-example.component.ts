import { Component } from '@angular/core';
import { MatFormField, MatInput } from '@angular/material/input';
import { MatLabel } from '@angular/material/form-field';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';

@Component({
    selector: 'app-basic-inputs-example',
    imports: [
        MatInput,
        MatFormField,
        MatLabel,
        CdkTextareaAutosize
    ],
    templateUrl: './basic-inputs-example.component.html',
    styleUrl: './basic-inputs-example.component.scss'
})
export class BasicInputsExampleComponent {

}
