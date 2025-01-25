import { Component } from '@angular/core';
import { BrandColorsComponent } from '@elementar/components/brand-colors';

@Component({
  selector: 'app-brand-colors-custom-colors-example',
  imports: [
    BrandColorsComponent
  ],
  templateUrl: './brand-colors-custom-colors-example.component.html',
  styleUrl: './brand-colors-custom-colors-example.component.scss'
})
export class BrandColorsCustomColorsExampleComponent {
  colors = ['#EF5A6F', '#D4BDAC', '#536493'];
  selectedColor = '';

  onColorChange(color: string): void {
    this.selectedColor = color;
  }
}
