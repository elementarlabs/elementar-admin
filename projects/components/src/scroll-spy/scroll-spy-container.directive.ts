import { Directive } from '@angular/core';

@Directive({
    selector: '[emrScrollSpyContainer]',
    exportAs: 'emrScrollSpyContainer',
    host: {
        'class': 'emr-scroll-spy-container'
    }
})
export class ScrollSpyContainerDirective {
}
