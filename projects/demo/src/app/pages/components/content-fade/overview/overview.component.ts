import { Component } from '@angular/core';
import { BasicChipsExampleComponent } from '../../chips/_examples/basic-chips-example/basic-chips-example.component';
import {
  ChipsAutocompleteExampleComponent
} from '../../chips/_examples/chips-autocomplete-example/chips-autocomplete-example.component';
import {
  ChipsDragAndDropExampleComponent
} from '../../chips/_examples/chips-drag-and-drop-example/chips-drag-and-drop-example.component';
import {
  ChipsWithIconsExampleComponent
} from '../../chips/_examples/chips-with-icons-example/chips-with-icons-example.component';
import {
  ChipsWithInputExampleComponent
} from '../../chips/_examples/chips-with-input-example/chips-with-input-example.component';
import { PlaygroundComponent } from '@demo/meta/playground/playground.component';
import {
  BasicContentFadeExampleComponent
} from '../_examples/basic-content-fade-example/basic-content-fade-example.component';
import {
  ContentFadeCustomWidthExampleComponent
} from '../_examples/content-fade-custom-width-example/content-fade-custom-width-example.component';
import { PageComponent } from '@demo/meta/page/page.component';
import { PageContentDirective } from '@demo/meta/page/page-content.directive';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [
    BasicChipsExampleComponent,
    ChipsAutocompleteExampleComponent,
    ChipsDragAndDropExampleComponent,
    ChipsWithIconsExampleComponent,
    ChipsWithInputExampleComponent,
    PlaygroundComponent,
    BasicContentFadeExampleComponent,
    ContentFadeCustomWidthExampleComponent,
    PageComponent,
    PageContentDirective
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
