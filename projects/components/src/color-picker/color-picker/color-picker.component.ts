import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component, DestroyRef,
  EventEmitter,
  forwardRef,
  HostListener, inject,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { ColorPickerControl } from '../helpers/control';
import { UltColorPickerChangeFormat } from '../properties';
import { Color } from '../helpers/color';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
    selector: 'emr-color-picker',
    exportAs: 'emrColorPicker',
    templateUrl: './color-picker.component.html',
    styleUrls: ['color-picker.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => ColorPickerComponent),
            multi: true
        }
    ],
    host: {
        'class': 'emr-color-picker',
        '[class.is-disabled]': 'disabled',
    },
    standalone: false
})
export class ColorPickerComponent implements OnInit, ControlValueAccessor {
  @Input()
  color: string;

  @Input()
  changeFormat: UltColorPickerChangeFormat = 'hex-alpha';

  @Input({ transform: booleanAttribute })
  disabled!: boolean;

  @Output()
  readonly colorChange = new EventEmitter<string>();

  @Output()
  readonly rawColorChange = new EventEmitter<Color>();

  readonly control = new ColorPickerControl();
  private _destroyRef = inject(DestroyRef);

  private _formatMap: Record<UltColorPickerChangeFormat, string> = {
    'hex': '_hex',
    'hex-alpha': '_hexAlpha',
    'rgb': '_rgb',
    'rgb-alpha': '_rgbAlpha',
    'hsl': 'hsl',
    'hsl-alpha': '_hslAlpha',
    'hsv': '_hsv',
    'hsv-alpha': '_hsvAlpha',
  };

  @HostListener('contextmenu', ['$event'])
  _contentMenuHandler(event: PointerEvent) {
    event.preventDefault();
    event.stopPropagation();
  }

  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(value: string) {
    this.color = value;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: BooleanInput) {
    this.disabled = coerceBooleanProperty(isDisabled);
  }

  ngOnInit() {
    if (this.color) {
      this.control.setValueFrom(this.color);
    }

    const self: any = this;
    this.control
      .valueChanges
      .pipe(
        takeUntilDestroyed(this._destroyRef)
      )
      .subscribe(color => {
        const method = this._formatMap[this.changeFormat];
        const result = self[method](color);
        this.onChange(result);
        this.onTouched(result);
        this.colorChange.emit(result);
        this.rawColorChange.emit(color);
      })
    ;
  }

  private _hex(color: Color) {
    return color.toHexString();
  }

  private _hexAlpha(color: Color) {
    return color.toHexString(true);
  }

  private _rgb(color: Color) {
    return color.toRgbString();
  }

  private _rgbAlpha(color: Color) {
    return color.toRgbaString();
  }

  private _hsl(color: Color) {
    return color.toHslString();
  }

  private _hslAlpha(color: Color) {
    return color.toHslaString();
  }

  private _hsv(color: Color) {
    return color.toHsvString();
  }

  private _hsvAlpha(color: Color) {
    return color.toHsvaString();
  }
}
