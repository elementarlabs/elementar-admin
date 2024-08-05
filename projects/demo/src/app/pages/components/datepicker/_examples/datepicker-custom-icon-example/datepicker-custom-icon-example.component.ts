import { Component } from '@angular/core';
import {
  MatDatepickerModule
} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-datepicker-custom-icon-example',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatIcon
  ],
  templateUrl: './datepicker-custom-icon-example.component.html',
  styleUrl: './datepicker-custom-icon-example.component.scss',
  providers: [
    provideNativeDateAdapter()
  ]
})
export class DatepickerCustomIconExampleComponent {

}
