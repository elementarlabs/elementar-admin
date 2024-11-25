import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { PopoverComponent, PopoverPosition, PopoverTriggerForDirective } from '@elementar/components/popover';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatOption, MatSelect } from '@angular/material/select';

@Component({
  selector: 'app-popover-with-custom-position-example',
  imports: [
    MatButton,
    MatFormField,
    MatLabel,
    MatSelect,
    ReactiveFormsModule,
    MatOption,
    PopoverComponent,
    PopoverTriggerForDirective
  ],
  templateUrl: './popover-with-custom-position-example.component.html',
  styleUrl: './popover-with-custom-position-example.component.scss'
})
export class PopoverWithCustomPositionExampleComponent {
  positionOptions: PopoverPosition[] = [
    'below-start', 'below-center', 'below-end',
    'above-start', 'above-center', 'above-end',
    'before-start', 'before-center', 'before-end',
    'after-start', 'after-center', 'after-end'
  ];
  position = new FormControl(this.positionOptions[0]);
}
