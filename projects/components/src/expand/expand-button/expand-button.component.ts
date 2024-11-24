import { Component } from '@angular/core';

@Component({
    selector: 'emr-expand-button,[emr-expand-button]',
    exportAs: 'emrExpandButton',
    templateUrl: './expand-button.component.html',
    styleUrl: './expand-button.component.scss',
    host: {
        'class': 'emr-expand-button'
    }
})
export class ExpandButtonComponent {
}
