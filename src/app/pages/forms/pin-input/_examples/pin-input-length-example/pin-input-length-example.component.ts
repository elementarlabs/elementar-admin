import { Component } from '@angular/core';
import { EmrPinInputModule } from '@elementar/components';

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
