import { Component } from '@angular/core';
import { PageComponent } from '@demo/meta/page/page.component';
import { PageContentDirective } from '@demo/meta/page/page-content.directive';
import { PlaygroundComponent } from '@demo/meta/playground/playground.component';
import {
  BasicTextEditorExampleComponent
} from '../_examples/basic-text-editor-example/basic-text-editor-example.component';
import {
  TextEditorFloatingMenuExampleComponent
} from '../_examples/text-editor-floating-menu-example/text-editor-floating-menu-example.component';

@Component({
  selector: 'app-overview',
  imports: [
    PageComponent,
    PageContentDirective,
    PlaygroundComponent,
    BasicTextEditorExampleComponent,
    TextEditorFloatingMenuExampleComponent
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
