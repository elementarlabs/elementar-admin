import { Component } from '@angular/core';

@Component({
    selector: 'emr-file-control,[emr-file-control]',
    exportAs: 'emrFileControl',
    templateUrl: './file-control.component.html',
    styleUrls: ['./file-control.component.scss'],
    host: {
        'class': 'emr-file-control'
    },
    standalone: false
})
export class FileControlComponent {
}
