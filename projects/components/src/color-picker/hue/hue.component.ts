import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component, ElementRef,
  inject, input,
  OnChanges, output,
  Renderer2, SimpleChanges,
  viewChild
} from '@angular/core';
import { BaseComponent } from '../base.component';
import { Color } from '../helpers/color';

@Component({
  selector: 'emr-hue',
  exportAs: 'emrHue',
  templateUrl: './hue.component.html',
  styleUrl: './hue.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'emr-hue',
  }
})
export class HueComponent extends BaseComponent implements OnChanges {
  private _renderer = inject(Renderer2);
  readonly pointer = viewChild.required<ElementRef>('pointer');

  hue = input.required<Color>();
  color = input.required<Color>();
  isVertical = input(false, {
    transform: booleanAttribute
  });

  readonly colorChange = output<Color>();
  readonly hueChange = output<Color>();

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['hue'] && changes['hue'].previousValue !== changes['hue'].currentValue) {
      const hsva = this.hue().getHsva();
      this.changePointerPosition(hsva.hue);
      this._setPointerBgColor();
    }
  }

  // @ts-ignore
  public movePointer({ x, y, height, width }): void {
    const hue = this.isVertical() ? (y / height) * 360 : (x / width) * 360;
    this.changePointerPosition(hue);
    const color = this.color().getHsva();
    const newColor = new Color().setHsva(hue, color.saturation, color.value, color.alpha);
    const newHueColor = new Color().setHsva(hue, 100, 100, color.alpha);
    const pointerHueColor = new Color().setHsva(hue, 100, 100, color.alpha);
    this._renderer.setStyle(this.pointer().nativeElement, 'backgroundColor', pointerHueColor.toRgbString());
    this.hueChange.emit(newHueColor);
    this.colorChange.emit(newColor);
  }

  /**
   * hue value is in range from 0 to 360°
   */
  private changePointerPosition(hue: number): void {
    const x = hue / 360 * 100;
    const orientation = this.isVertical() ? 'top' : 'left';
    this._renderer.setStyle(this.pointer().nativeElement, orientation, `${x}%`);
  }

  private _setPointerBgColor() {
    const hsva = this.hue().getHsva();
    const newHueColor = new Color().setHsva(hsva.hue, 100, 100);
    this._renderer.setStyle(this.pointer().nativeElement, 'backgroundColor', newHueColor.toRgbString());
  }
}
