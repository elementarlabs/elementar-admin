import { Directive } from '@angular/core';

@Directive({
    selector: '[emrScrollSpyContainer]',
    exportAs: 'emrScrollSpyContainer',
    host: {
        'class': 'emr-scroll-spy-container'
    },
    standalone: false
})
export class ScrollSpyContainerDirective {
}
