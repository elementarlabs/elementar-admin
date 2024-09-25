import { Component, OnChanges, SimpleChanges, input, output } from '@angular/core';

const defaultColors = [
  '#35d1b3', '#08b0fe', '#8268f2', '#ae52d3', '#eb4ea3',
  '#fb811e', '#fac624', '#c2c2c2', '#4ed7ff'
];

@Component({
  selector: 'emr-brand-colors',
  exportAs: 'emrBrandColors',
  standalone: true,
  imports: [],
  templateUrl: './brand-colors.component.html',
  styleUrl: './brand-colors.component.scss',
  host: {
    'class': 'emr-brand-colors',
  }
})
export class BrandColorsComponent implements OnChanges {
  colors = input<string[]>(defaultColors);
  selectedColor = input<string>();

  readonly colorSelect = output<string>();
  protected _selectedColor: string;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['selectedColor']) {
      this._selectedColor = changes['selectedColor'].currentValue;
    }
  }

  selectColor(color: string): void {
    this._selectedColor = color;
    this.colorSelect.emit(color);
  }
}
