import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component, ElementRef,
  EventEmitter, inject,
  Input,
  OnChanges,
  Output, Renderer2, SimpleChanges,
  ViewChild
} from '@angular/core';
import { BaseComponent } from '../base.component';
import { Color } from '../helpers/color';

@Component({
    selector: 'emr-hue',
    exportAs: 'emrHue',
    templateUrl: './hue.component.html',
    styleUrls: ['./hue.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class HueComponent extends BaseComponent implements OnChanges {
  @ViewChild('pointer', { static: true })
  pointer: ElementRef;

  @Input()
  hue: Color;

  @Input()
  public color: Color;

  @Input({ transform: booleanAttribute })
  isVertical = false;

  @Output()
  readonly colorChange = new EventEmitter<Color>(false);

  @Output()
  readonly hueChange = new EventEmitter<Color>();

  private _renderer = inject(Renderer2);

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['hue'] && changes['hue'].previousValue !== changes['hue'].currentValue) {
      const hsva = this.hue.getHsva();
      this.changePointerPosition(hsva.hue);
      this._setPointerBgColor();
    }
  }

  // @ts-ignore
  public movePointer({ x, y, height, width }): void {
    const hue = this.isVertical ? (y / height) * 360 : (x / width) * 360;
    this.changePointerPosition(hue);
    const color = this.color.getHsva();
    const newColor = new Color().setHsva(hue, color.saturation, color.value, color.alpha);
    const newHueColor = new Color().setHsva(hue, 100, 100, color.alpha);
    const pointerHueColor = new Color().setHsva(hue, 100, 100, color.alpha);
    this._renderer.setStyle(this.pointer.nativeElement, 'backgroundColor', pointerHueColor.toRgbString());
    this.hueChange.emit(newHueColor);
    this.colorChange.emit(newColor);
  }

  /**
   * hue value is in range from 0 to 360°
   */
  private changePointerPosition(hue: number): void {
    const x = hue / 360 * 100;
    const orientation = this.isVertical ? 'top' : 'left';
    this._renderer.setStyle(this.pointer.nativeElement, orientation, `${x}%`);
  }

  private _setPointerBgColor() {
    const hsva = this.hue.getHsva();
    // const x = hsva.hue / 360 * 100;
    // const orientation = this.isVertical ? 'top' : 'left';
    // const color = this.color.getHsva();
    const newHueColor = new Color().setHsva(hsva.hue, 100, 100);
    this._renderer.setStyle(this.pointer.nativeElement, 'backgroundColor', newHueColor.toRgbString());
  }
}
