import { Component } from '@angular/core';
import { PlaygroundComponent } from '@demo/meta/playground/playground.component';
import { BasicUploadExampleComponent } from '../_examples/basic-upload-example/basic-upload-example.component';
import { UploadAreaExampleComponent } from '../_examples/upload-area-example/upload-area-example.component';
import { FileListExampleComponent } from '../_examples/file-list-example/file-list-example.component';
import { FileGridExampleComponent } from '../_examples/file-grid-example/file-grid-example.component';
import { PageComponent } from '@demo/meta/page/page.component';
import { PageContentDirective } from '@demo/meta/page/page-content.directive';

@Component({
    imports: [
        PlaygroundComponent,
        BasicUploadExampleComponent,
        UploadAreaExampleComponent,
        FileListExampleComponent,
        FileGridExampleComponent,
        PageComponent,
        PageContentDirective
    ],
    templateUrl: './overview.component.html',
    styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
