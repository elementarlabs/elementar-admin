import { Component } from '@angular/core';
import { MatTimepicker, MatTimepickerInput, MatTimepickerToggle } from '@angular/material/timepicker';
import { MatInput } from '@angular/material/input';
import { MatFormField, MatLabel, MatSuffix } from '@angular/material/form-field';

@Component({
  selector: 'app-basic-timepicker-example',
  imports: [
    MatTimepickerInput,
    MatInput,
    MatTimepicker,
    MatTimepickerToggle,
    MatSuffix,
    MatLabel,
    MatFormField
  ],
  templateUrl: './basic-timepicker-example.component.html',
  styleUrl: './basic-timepicker-example.component.scss'
})
export class BasicTimepickerExampleComponent {

}
