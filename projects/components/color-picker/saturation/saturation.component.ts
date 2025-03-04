import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject, input,
  output,
  Renderer2,
  SimpleChanges,
  viewChild
} from '@angular/core';
import { Color } from '../helpers/color';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'emr-saturation',
  exportAs: 'emrSaturation',
  templateUrl: './saturation.component.html',
  styleUrl: './saturation.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'emr-saturation',
    '[style.backgroundColor]': 'backgroundColor'
  }
})
export class SaturationComponent extends BaseComponent {
  private _renderer = inject(Renderer2);
  readonly pointer = viewChild.required<ElementRef>('pointer');

  hue = input.required<Color>();
  color = input.required<Color>();

  readonly colorChange = output<Color>();

  protected _hue: Color;

  get backgroundColor(): string {
    return this._hue ? this._hue.toRgbString() : '';
  }

  constructor() {
    super();
  }

  ngOnInit(): void {
    if (!this.hue()) {
      this._hue = Color.from(this.color().getHsva());
    } else {
      this._hue = this.hue() as Color;
    }

    this._renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', this.backgroundColor);
  }

  /**
   * color can be changed through inputs
   * and then we need to move pointer
   */
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['color'] && changes['color'].previousValue !== changes['color'].currentValue) {
      if (!this._hue) {
        this._hue = Color.from(this.color().getHsva());
      }

      const hsva = this.color().getHsva();
      this.changePointerPosition(hsva.saturation, hsva.value);
      this._setPointerBgColor()
    }
  }

  // @ts-ignore
  movePointer({ x, y, height, width }): void {
    const saturation = (x * 100) / width;
    const bright = -((y * 100) / height) + 100;
    this.changePointerPosition(saturation, bright);
    const hsva = this._hue.getHsva();
    const color = this.color().getHsva();
    const newColor = new Color().setHsva(hsva.hue, saturation, bright, color.alpha);
    const pointerColor = new Color().setHsva(hsva.hue, saturation, bright, color.alpha);
    this._renderer.setStyle(this.pointer().nativeElement, 'backgroundColor', pointerColor.toRgbString());
    this.colorChange.emit(newColor);
  }

  private changePointerPosition(x: number, y: number): void {
    const pointer = this.pointer();
    this._renderer.setStyle(pointer.nativeElement, 'top', `${100 - y}%`);
    this._renderer.setStyle(pointer.nativeElement, 'left', `${x}%`);
  }

  private _setPointerBgColor() {
    const hsva = this._hue.getHsva();
    const color = this.color().getHsva();
    const newColor = new Color().setHsva(hsva.hue, color.saturation, color.value);
    this._renderer.setStyle(this.pointer().nativeElement, 'backgroundColor', newColor.toRgbString());
  }
}
