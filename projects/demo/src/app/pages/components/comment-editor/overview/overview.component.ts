import { Component } from '@angular/core';
import {
  BasicCommandBarExampleComponent
} from '../../command-bar/_examples/basic-command-bar-example/basic-command-bar-example.component';
import { PageComponent } from '@demo/meta/page/page.component';
import { PageContentDirective } from '@demo/meta/page/page-content.directive';
import { PlaygroundComponent } from '@demo/meta/playground/playground.component';
import {
  BasicCommentEditorExampleComponent
} from '../_examples/basic-comment-editor-example/basic-comment-editor-example.component';
import {
  CommentEditorWithToolbarExampleComponent
} from '../_examples/comment-editor-with-toolbar-example/comment-editor-with-toolbar-example.component';
import {
  CommentEditorWithFullViewModeExampleComponent
} from '../_examples/comment-editor-with-full-view-mode-example/comment-editor-with-full-view-mode-example.component';
import {
  CommentEditorWithUploadErrorExampleComponent
} from '../_examples/comment-editor-with-upload-error-example/comment-editor-with-upload-error-example.component';
import {
  CommentEditorWithCustomIconsExampleComponent
} from '../_examples/comment-editor-with-custom-icons-example/comment-editor-with-custom-icons-example.component';
import {
  CommentEditorCancelButtonAlwaysVisibleExampleComponent
} from '../_examples/comment-editor-cancel-button-always-visible-example/comment-editor-cancel-button-always-visible-example.component';
import {
  CommentEditorCustomButtonLabelsExampleComponent
} from '../_examples/comment-editor-custom-button-labels-example/comment-editor-custom-button-labels-example.component';
import {
  CommentEditorWithMaxContentHeightExampleComponent
} from '../_examples/comment-editor-with-max-content-height-example/comment-editor-with-max-content-height-example.component';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [
    BasicCommandBarExampleComponent,
    PageComponent,
    PageContentDirective,
    PlaygroundComponent,
    BasicCommentEditorExampleComponent,
    CommentEditorWithToolbarExampleComponent,
    CommentEditorWithFullViewModeExampleComponent,
    CommentEditorWithUploadErrorExampleComponent,
    CommentEditorWithCustomIconsExampleComponent,
    CommentEditorCancelButtonAlwaysVisibleExampleComponent,
    CommentEditorCustomButtonLabelsExampleComponent,
    CommentEditorWithMaxContentHeightExampleComponent
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
