import { Component } from '@angular/core';
import { PlaygroundComponent } from '@meta/playground/playground.component';
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
import { PageComponent } from '@meta/page/page.component';
import { PageContentDirective } from '@meta/page/page-content.directive';

@Component({
  selector: 'app-overview',
  imports: [
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
