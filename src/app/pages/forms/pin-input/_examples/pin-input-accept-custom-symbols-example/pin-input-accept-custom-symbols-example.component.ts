import { Component } from '@angular/core';
import { EmrPinInputModule } from '@components/pin-input/pin-input.module';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pin-input-accept-custom-symbols-example',
  standalone: true,
  imports: [
    EmrPinInputModule,
    FormsModule
  ],
  templateUrl: './pin-input-accept-custom-symbols-example.component.html',
  styleUrl: './pin-input-accept-custom-symbols-example.component.scss'
})
export class PinInputAcceptCustomSymbolsExampleComponent {
  value = '';
  acceptOnly = /^([0-9]|[a-z]|[A-Z])+$/;
}
