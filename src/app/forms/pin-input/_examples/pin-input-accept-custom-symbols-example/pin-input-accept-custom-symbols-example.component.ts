import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PinInputComponent } from '@elementar-ui/components/pin-input';

@Component({
  selector: 'app-pin-input-accept-custom-symbols-example',
  imports: [
    FormsModule,
    PinInputComponent
  ],
  templateUrl: './pin-input-accept-custom-symbols-example.component.html',
  styleUrl: './pin-input-accept-custom-symbols-example.component.scss'
})
export class PinInputAcceptCustomSymbolsExampleComponent {
  value = '';
  acceptOnly = /^([0-9]|[a-z]|[A-Z])+$/;
}
