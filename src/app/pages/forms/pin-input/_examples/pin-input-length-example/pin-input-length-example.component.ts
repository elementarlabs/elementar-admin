import { Component } from '@angular/core';
import { EmrPinInputModule } from '@components/pin-input/pin-input.module';

@Component({
  selector: 'app-pin-input-length-example',
  standalone: true,
  imports: [
    EmrPinInputModule
  ],
  templateUrl: './pin-input-length-example.component.html',
  styleUrl: './pin-input-length-example.component.scss'
})
export class PinInputLengthExampleComponent {

}
