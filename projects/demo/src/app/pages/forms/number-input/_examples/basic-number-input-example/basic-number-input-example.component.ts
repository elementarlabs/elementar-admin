import { Component } from '@angular/core';
import { EmrNumberInputModule } from '@elementar/components/number-input';
import { MatFormField, MatLabel } from '@angular/material/form-field';

@Component({
  selector: 'app-basic-number-input-example',
  imports: [
    EmrNumberInputModule,
    MatFormField,
    MatLabel
  ],
  templateUrl: './basic-number-input-example.component.html',
  styleUrl: './basic-number-input-example.component.scss'
})
export class BasicNumberInputExampleComponent {

}
