import {
  booleanAttribute,
  ChangeDetectorRef,
  Component,
  ElementRef,
  forwardRef,
  inject, input,
  Input,
  OnInit, output,
  Renderer2
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SegmentedTriggerSize, EMR_SEGMENTED } from '../types';
import { SelectionModel } from '@angular/cdk/collections';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';

@Component({
  selector: 'emr-segmented',
  exportAs: 'emrSegmented',
  standalone: true,
  templateUrl: './segmented.component.html',
  styleUrl: './segmented.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SegmentedComponent),
      multi: true
    },
    {
      provide: EMR_SEGMENTED,
      useExisting: forwardRef(() => SegmentedComponent)
    }
  ],
  host: {
    'class': 'emr-segmented',
    '[class.is-disabled]': 'disabled() || _disabled || null',
  },
})
export class SegmentedComponent implements OnInit, ControlValueAccessor {
  private _elementRef = inject(ElementRef);
  private _renderer = inject(Renderer2);
  private _cdr = inject(ChangeDetectorRef);
  protected _disabled = false;

  @Input()
  set selectedValue(value: any) {
    this._selectedValue.select(value);
  }
  private _selectedValue = new SelectionModel<any>(false, []);

  disabled = input(false, {
    transform: booleanAttribute
  });

  @Input()
  set size(size: SegmentedTriggerSize) {
    this._size = size;
    this._renderer.setAttribute(this._elementRef.nativeElement, 'emr-segmented-size', this._size);
  }
  private _size: SegmentedTriggerSize = 'default';

  readonly selectedValueChanged = output<any>();

  _onChange: any = () => {};
  _onTouched: any = () => {};

  get api() {
    return {
      isSelected: (value: any) => this._selectedValue.isSelected(value),
      select: (value: any) => this._select(value)
    };
  }

  ngOnInit() {
    this._renderer.setAttribute(this._elementRef.nativeElement, 'emr-segmented-size', this._size);
  }

  writeValue(value: any): void {
    this._selectedValue.select(value ? value : []);
    this._cdr.detectChanges();
  }

  registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }

  setDisabledState(isDisabled: BooleanInput): void {
    this._disabled = coerceBooleanProperty(isDisabled);
  }

  private _select(value: any): void {
    this._selectedValue.select(value);
    this._onChange(value);
    this._onTouched(value);
  }
}
