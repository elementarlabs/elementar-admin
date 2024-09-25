import { Component } from '@angular/core';
import { BrandColorsComponent } from '@elementar/components/brand-colors';

@Component({
  selector: 'app-basic-brand-colors-example',
  standalone: true,
  imports: [
    BrandColorsComponent
  ],
  templateUrl: './basic-brand-colors-example.component.html',
  styleUrl: './basic-brand-colors-example.component.scss'
})
export class BasicBrandColorsExampleComponent {
  selectedColor = '#08b0fe';

  onColorSelect(color: string): void {
    this.selectedColor = color;
  }
}
