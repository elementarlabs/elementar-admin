import { Component } from '@angular/core';
import { PlaygroundComponent } from '@meta/playground/playground.component';
import { BasicSelectExampleComponent } from '../_examples/basic-select-example/basic-select-example.component';
import { GetSetValueExampleComponent } from '../_examples/get-set-value-example/get-set-value-example.component';
import {
  FormFieldFeaturesExampleComponent
} from '../_examples/form-field-features-example/form-field-features-example.component';
import { DisabledExampleComponent } from '../_examples/disabled-example/disabled-example.component';
import { ResettingValueExampleComponent } from '../_examples/resetting-value-example/resetting-value-example.component';
import {
  GroupsOfOptionsExampleComponent
} from '../_examples/groups-of-options-example/groups-of-options-example.component';
import {
  MultipleSelectionExampleComponent
} from '../_examples/multiple-selection-example/multiple-selection-example.component';
import { CustomTriggerExampleComponent } from '../_examples/custom-trigger-example/custom-trigger-example.component';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [
    PlaygroundComponent,
    BasicSelectExampleComponent,
    GetSetValueExampleComponent,
    FormFieldFeaturesExampleComponent,
    DisabledExampleComponent,
    ResettingValueExampleComponent,
    GroupsOfOptionsExampleComponent,
    MultipleSelectionExampleComponent,
    CustomTriggerExampleComponent
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
