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
  BasicDatepickerExampleComponent
} from '../_examples/basic-datepicker-example/basic-datepicker-example.component';
import {
  DatepickerCustomIconExampleComponent
} from '../_examples/datepicker-custom-icon-example/datepicker-custom-icon-example.component';
import {
  DatepickerWithCustomHeaderExampleComponent
} from '../_examples/datepicker-with-custom-header-example/datepicker-with-custom-header-example.component';
import {
  DatepickerActionsButtonExampleComponent
} from '../_examples/datepicker-actions-button-example/datepicker-actions-button-example.component';
import {
  BasicDateRangePickerExampleComponent
} from '../_examples/basic-date-range-picker-example/basic-date-range-picker-example.component';
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
    BasicDatepickerExampleComponent,
    DatepickerCustomIconExampleComponent,
    DatepickerWithCustomHeaderExampleComponent,
    DatepickerActionsButtonExampleComponent,
    BasicDateRangePickerExampleComponent,
    PageComponent,
    PageContentDirective
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
