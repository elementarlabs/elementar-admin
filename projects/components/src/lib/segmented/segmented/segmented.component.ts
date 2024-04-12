import {
  booleanAttribute,
  Component,
  ElementRef, EventEmitter,
  forwardRef,
  inject,
  Input,
  OnInit,
  Output,
  Renderer2
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SegmentedTriggerSize, ULT_SEGMENTED } from '../types';
import { SelectionModel } from '@angular/cdk/collections';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';

@Component({
  selector: 'emr-segmented',
  exportAs: 'emrSegmented',
  templateUrl: './segmented.component.html',
  styleUrl: './segmented.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SegmentedComponent),
      multi: true
    },
    {
      provide: ULT_SEGMENTED,
      useExisting: forwardRef(() => SegmentedComponent)
    }
  ],
  host: {
    'class': 'emr-segmented',
    '[class.is-disabled]': 'disabled',
  },
})
export class SegmentedComponent implements OnInit, ControlValueAccessor {
  private _elementRef = inject(ElementRef);
  private _renderer = inject(Renderer2);

  @Input()
  set selectedValue(value: any) {
    this._selectedValue.select(value);
  }
  private _selectedValue = new SelectionModel<any>(false, []);

  @Input({ transform: booleanAttribute })
  disabled!: boolean;

  @Input()
  set size(size: SegmentedTriggerSize) {
    this._size = size;
    this._renderer.setAttribute(this._elementRef.nativeElement, 'emr-segmented-size', this._size);
  }
  private _size: SegmentedTriggerSize = 'default';

  @Output()
  readonly selectedValueChanged = new EventEmitter<any>();

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

  writeValue(value: any) {
    this._selectedValue.select(value ? [value] : []);
  }

  registerOnChange(fn: any) {
    this._onChange = fn;
  }

  registerOnTouched(fn: any) {
    this._onTouched = fn;
  }

  setDisabledState(isDisabled: BooleanInput) {
    this.disabled = coerceBooleanProperty(isDisabled);
  }

  private _select(value: any) {
    this._selectedValue.select(value);
    this._onChange(value);
    this._onTouched(value);
  }
}
