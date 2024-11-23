import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-datepicker-actions-button-example',
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatButton
  ],
  templateUrl: './datepicker-actions-button-example.component.html',
  styleUrl: './datepicker-actions-button-example.component.scss',
  providers: [
    provideNativeDateAdapter()
  ]
})
export class DatepickerActionsButtonExampleComponent {

}
