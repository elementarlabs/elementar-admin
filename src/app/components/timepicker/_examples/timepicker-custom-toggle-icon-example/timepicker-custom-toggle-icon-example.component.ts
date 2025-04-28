import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import {
  MatTimepickerModule,
} from '@angular/material/timepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-timepicker-custom-toggle-icon-example',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatTimepickerModule,
    MatIcon
  ],
  templateUrl: './timepicker-custom-toggle-icon-example.component.html',
  styleUrl: './timepicker-custom-toggle-icon-example.component.scss'
})
export class TimepickerCustomToggleIconExampleComponent {

}
