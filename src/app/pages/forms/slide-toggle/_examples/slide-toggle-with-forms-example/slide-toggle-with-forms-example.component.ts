import { Component, inject } from '@angular/core';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-slide-toggle-with-forms-example',
  standalone: true,
  imports: [
    MatSlideToggle,
    FormsModule,
    MatButton,
    ReactiveFormsModule
  ],
  templateUrl: './slide-toggle-with-forms-example.component.html',
  styleUrl: './slide-toggle-with-forms-example.component.scss'
})
export class SlideToggleWithFormsExampleComponent {
  private _formBuilder = inject(FormBuilder);
  isChecked = true;
  formGroup = this._formBuilder.group({
    enableWifi: '',
    acceptTerms: ['', Validators.requiredTrue],
  });
}
