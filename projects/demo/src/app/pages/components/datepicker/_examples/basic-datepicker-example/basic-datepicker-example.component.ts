import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  MatDatepickerModule,
} from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-basic-datepicker-example',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule
  ],
  templateUrl: './basic-datepicker-example.component.html',
  styleUrl: './basic-datepicker-example.component.scss',
  providers: [
    provideNativeDateAdapter()
  ]
})
export class BasicDatepickerExampleComponent {

}
