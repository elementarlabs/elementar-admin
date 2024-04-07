import { Component } from '@angular/core';
import { EmrPinInputModule } from '@components/pin-input/pin-input.module';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-basic-pin-input-example',
  standalone: true,
  imports: [
    EmrPinInputModule,
    FormsModule

  ],
  templateUrl: './basic-pin-input-example.component.html',
  styleUrl: './basic-pin-input-example.component.scss'
})
export class BasicPinInputExampleComponent {
  value = '';
}
