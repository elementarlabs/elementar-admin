import { Component } from '@angular/core';
import { BrandColorsComponent } from '@elementar/components/brand-colors';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-brand-colors-as-form-control-example',
  standalone: true,
  imports: [
    BrandColorsComponent,
    FormsModule
  ],
  templateUrl: './brand-colors-as-form-control-example.component.html',
  styleUrl: './brand-colors-as-form-control-example.component.scss'
})
export class BrandColorsAsFormControlExampleComponent {
  selectedColor = '#4ed7ff';
}
