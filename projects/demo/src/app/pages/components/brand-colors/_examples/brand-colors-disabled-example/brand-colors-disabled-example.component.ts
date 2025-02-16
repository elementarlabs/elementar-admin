import { Component } from '@angular/core';
import { BrandColorsComponent } from '@elementar-ui/components';

@Component({
  selector: 'app-brand-colors-disabled-example',
  imports: [
    BrandColorsComponent
  ],
  templateUrl: './brand-colors-disabled-example.component.html',
  styleUrl: './brand-colors-disabled-example.component.scss'
})
export class BrandColorsDisabledExampleComponent {
  selectedColor = '#08b0fe';

  onColorChange(color: string): void {
    this.selectedColor = color;
  }
}
