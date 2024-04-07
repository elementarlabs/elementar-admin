import { Component } from '@angular/core';
import { PlaygroundComponent } from '@meta/playground/playground.component';
import { BasicUploadExampleComponent } from '../_examples/basic-upload-example/basic-upload-example.component';
import { UploadAreaExampleComponent } from '../_examples/upload-area-example/upload-area-example.component';
import { FileListExampleComponent } from '../_examples/file-list-example/file-list-example.component';
import { FileGridExampleComponent } from '../_examples/file-grid-example/file-grid-example.component';

@Component({
  standalone: true,
  imports: [
    PlaygroundComponent,
    BasicUploadExampleComponent,
    UploadAreaExampleComponent,
    FileListExampleComponent,
    FileGridExampleComponent
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
