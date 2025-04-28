import { Component } from '@angular/core';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';

@Component({
    selector: 'app-textarea-autosize-example',
    imports: [
        MatFormField,
        MatInput,
        MatLabel,
        CdkTextareaAutosize
    ],
    templateUrl: './textarea-autosize-example.component.html',
    styleUrl: './textarea-autosize-example.component.scss'
})
export class TextareaAutosizeExampleComponent {

}
