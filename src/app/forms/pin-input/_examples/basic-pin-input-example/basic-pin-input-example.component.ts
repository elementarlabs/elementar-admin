import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PinInputComponent } from '@elementar-ui/components/pin-input';

@Component({
  selector: 'app-basic-pin-input-example',
  imports: [
    FormsModule,
    PinInputComponent
  ],
  templateUrl: './basic-pin-input-example.component.html',
  styleUrl: './basic-pin-input-example.component.scss'
})
export class BasicPinInputExampleComponent {
  value = '';
}
