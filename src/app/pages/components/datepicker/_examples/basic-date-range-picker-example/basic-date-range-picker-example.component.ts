import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-basic-date-range-picker-example',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule
  ],
  templateUrl: './basic-date-range-picker-example.component.html',
  styleUrl: './basic-date-range-picker-example.component.scss',
  providers: [
    provideNativeDateAdapter()
  ]
})
export class BasicDateRangePickerExampleComponent {

}
