import { Component } from '@angular/core';
import { EmrPinInputModule } from '@elementar/components';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pin-input-with-placeholder-example',
  standalone: true,
  imports: [
    EmrPinInputModule,
    FormsModule
  ],
  templateUrl: './pin-input-with-placeholder-example.component.html',
  styleUrl: './pin-input-with-placeholder-example.component.scss'
})
export class PinInputWithPlaceholderExampleComponent {
  value = '';
}
