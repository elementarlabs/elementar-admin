import { Component } from '@angular/core';
import { MatInput, MatLabel } from '@angular/material/input';
import { MatDatepicker, MatDatepickerInput, MatDatepickerToggle } from '@angular/material/datepicker';
import { MatFormField, MatSuffix } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatTimepicker, MatTimepickerInput, MatTimepickerToggle } from '@angular/material/timepicker';

@Component({
  selector: 'app-timepicker-with-datepicker-example',
  imports: [
    MatInput,
    MatDatepicker,
    MatDatepickerToggle,
    MatDatepickerInput,
    MatSuffix,
    FormsModule,
    MatLabel,
    MatTimepickerInput,
    MatTimepicker,
    MatTimepickerToggle,
    MatFormField
  ],
  templateUrl: './timepicker-with-datepicker-example.component.html',
  styleUrl: './timepicker-with-datepicker-example.component.scss'
})
export class TimepickerWithDatepickerExampleComponent {
  value: Date;
}
