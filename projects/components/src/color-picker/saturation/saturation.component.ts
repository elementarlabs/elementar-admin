import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  inject,
  Input,
  Output,
  Renderer2,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import { Color } from '../helpers/color';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'emr-saturation',
  exportAs: 'emrSaturation',
  templateUrl: './saturation.component.html',
  styleUrls: ['./saturation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'emr-saturation'
  }
})
export class SaturationComponent extends BaseComponent {
  @Input()
  hue: Color;

  @Input()
  color: Color;

  @Output()
  readonly colorChange = new EventEmitter<Color>(false);

  @ViewChild('pointer', { static: true })
  pointer: ElementRef;

  private _renderer = inject(Renderer2);

  @HostBinding('style.backgroundColor')
  get backgroundColor(): string {
    return this.hue ? this.hue.toRgbString() : '';
  }

  ngOnInit(): void {
    if (!this.hue) {
      this.hue = Color.from(this.color.getHsva());
    }

    this._renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', this.backgroundColor);
  }

  /**
   * color can be changed through inputs
   * and then we need to move pointer
   */
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['color'] && changes['color'].previousValue !== changes['color'].currentValue) {
      const hsva = this.color.getHsva();
      this.changePointerPosition(hsva.saturation, hsva.value);
      this._setPointerBgColor()
    }
  }

  // @ts-ignore
  movePointer({ x, y, height, width }): void {
    const saturation = (x * 100) / width;
    const bright = -((y * 100) / height) + 100;
    this.changePointerPosition(saturation, bright);
    const hsva = this.hue.getHsva();
    const color = this.color.getHsva();
    const newColor = new Color().setHsva(hsva.hue, saturation, bright, color.alpha);
    const pointerColor = new Color().setHsva(hsva.hue, saturation, bright, color.alpha);
    this._renderer.setStyle(this.pointer.nativeElement, 'backgroundColor', pointerColor.toRgbString());
    this.colorChange.emit(newColor);
  }

  private changePointerPosition(x: number, y: number): void {
    this._renderer.setStyle(this.pointer.nativeElement, 'top', `${100 - y}%`);
    this._renderer.setStyle(this.pointer.nativeElement, 'left', `${x}%`);
  }

  private _setPointerBgColor() {
    const hsva = this.hue.getHsva();
    const color = this.color.getHsva();
    const newColor = new Color().setHsva(hsva.hue, color.saturation, color.value);
    this._renderer.setStyle(this.pointer.nativeElement, 'backgroundColor', newColor.toRgbString());
  }
}
