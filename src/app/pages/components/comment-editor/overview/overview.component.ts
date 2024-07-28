import { Component } from '@angular/core';
import {
  BasicCommandBarExampleComponent
} from '../../command-bar/_examples/basic-command-bar-example/basic-command-bar-example.component';
import { PageComponent } from '@meta/page/page.component';
import { PageContentDirective } from '@meta/page/page-content.directive';
import { PlaygroundComponent } from '@meta/playground/playground.component';
import {
  BasicCommentEditorExampleComponent
} from '../_examples/basic-comment-editor-example/basic-comment-editor-example.component';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [
    BasicCommandBarExampleComponent,
    PageComponent,
    PageContentDirective,
    PlaygroundComponent,
    BasicCommentEditorExampleComponent
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
