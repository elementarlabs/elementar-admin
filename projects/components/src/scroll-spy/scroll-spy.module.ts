import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollSpyNavComponent } from './scroll-spy-nav/scroll-spy-nav.component';
import { ScrollSpyOnComponent } from './scroll-spy-on/scroll-spy-on.component';
import { ScrollSpyTitleComponent } from './scroll-spy-title/scroll-spy-title.component';
import { ScrollSpyContainerDirective } from './scroll-spy-container.directive';

@NgModule({
    imports: [
        CommonModule,
        ScrollSpyNavComponent,
        ScrollSpyOnComponent,
        ScrollSpyTitleComponent,
        ScrollSpyContainerDirective
    ],
    exports: [
        ScrollSpyNavComponent,
        ScrollSpyOnComponent,
        ScrollSpyTitleComponent,
        ScrollSpyContainerDirective
    ]
})
export class EmrScrollSpyModule { }
