import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  EventEmitter,
  HostBinding,
  inject,
  Input,
  numberAttribute,
  OnDestroy,
  Optional,
  Output,
  Self,
  ViewChild
} from '@angular/core';
import { FormGroupDirective, NgControl, NgForm } from '@angular/forms';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { DecreaseControlDirective } from '../decrease-control.directive';
import { IncreaseControlDirective } from '../increase-control.directive';
import { NumberInputPrefixDirective } from '../number-input-prefix.directive';
import { NumberInputSuffixDirective } from '../number-input-suffix.directive';
import { MatFormFieldControl } from '@angular/material/form-field';
import { Subject } from 'rxjs';
import { MatRipple } from '@angular/material/core';
import { NgTemplateOutlet } from '@angular/common';

@Component({
    selector: 'emr-number-input',
    exportAs: 'emrNumberInput',
    templateUrl: './number-input.component.html',
    styleUrl: './number-input.component.scss',
    providers: [
        {
            provide: MatFormFieldControl,
            useExisting: NumberInputComponent
        }
    ],
    host: {
        'class': 'emr-number-input'
    },
    imports: [MatRipple, NgTemplateOutlet]
})
export class NumberInputComponent implements MatFormFieldControl<any>, OnDestroy, DoCheck {
  private _elementRef = inject(ElementRef);
  readonly disableAutomaticLabeling: boolean;
  readonly placeholder: string;

  @ViewChild('input', { static: true, read: ElementRef })
  private _input: ElementRef<HTMLInputElement>;

  @ContentChild(DecreaseControlDirective)
  readonly _decreaseControlRef: DecreaseControlDirective;

  @ContentChild(IncreaseControlDirective)
  readonly _increaseControlRef: IncreaseControlDirective;

  @ContentChild(NumberInputPrefixDirective)
  readonly _prefixRef: NumberInputPrefixDirective;

  @ContentChild(NumberInputSuffixDirective)
  readonly _suffixRef: NumberInputSuffixDirective;

  @Input({ transform: numberAttribute })
  min: number | undefined;

  @Input({ transform: numberAttribute })
  max: number | undefined;

  @Input({ transform: numberAttribute })
  step = 1;

  @Input({ transform: numberAttribute })
  disabled: boolean;

  @Input({ transform: booleanAttribute })
  readonly: boolean;

  @Input({ transform: booleanAttribute })
  invalid: boolean;

  @Input({ transform: booleanAttribute })
  roundedFull = false;

  @HostBinding('class.floating')
  get shouldLabelFloat() {
    return this.focused || !this.empty;
  }

  @Input()
  get required(): boolean {
    return this._required;
  }
  set required(req: BooleanInput) {
    this._required = coerceBooleanProperty(req);
    this.stateChanges.next();
  }
  private _required = false;

  get empty(): boolean {
    if (this._value === 0) {
      return false;
    }

    return typeof this._value !== 'number';
  }

  controlType?: string | undefined;
  autofilled?: boolean | undefined;
  userAriaDescribedBy?: string | undefined;
  stateChanges = new Subject<void>();
  focused = false;
  touched = false;
  errorState: boolean = false;

  constructor(
    @Optional() @Self() public ngControl: NgControl,
    @Optional() private _parentForm: NgForm,
    @Optional() private _parentFormGroup: FormGroupDirective
  ) {
    // Replace the provider from above with this.
    if (this.ngControl != null) {
      // Setting the value accessor directly (instead of using
      // the providers) to avoid running into a circular import.
      this.ngControl.valueAccessor = this;
    }
  }

  setDescribedByIds(ids: string[]) {
    const controlElement = this._elementRef.nativeElement;
    controlElement.setAttribute('aria-describedby', ids.join(' '));
  }

  @Output()
  readonly valueChange = new EventEmitter<number>();

  onFocusIn(event: FocusEvent) {
    if (!this.focused) {
      this.focused = true;
      this.stateChanges.next();
    }
  }

  onFocusOut(event: FocusEvent) {
    if (!this._elementRef.nativeElement.contains(event.relatedTarget as Element)) {
      this.touched = true;
      this.focused = false;
      this.onTouched();
      this.stateChanges.next();
    }
  }

  static nextId = 0;
  private _value: number | undefined;

  @HostBinding()
  id = `emr-number-input${NumberInputComponent.nextId++}`;

  set value(value: number | undefined) {
    this._value = value;
    this.stateChanges.next();
  }
  get value(): number | undefined {
    return this._value;
  }

  ngOnDestroy() {
    this.stateChanges.complete();
  }

  onChange: any = () => {};
  onTouched: any = () => {};

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = coerceBooleanProperty(isDisabled);
  }

  writeValue(value: any): void {
    this._input.nativeElement.value = value;
    this.value = value;
  }

  decrease(event: MouseEvent, input: HTMLInputElement) {
    event.preventDefault();
    event.stopPropagation();
    let value = +input.value;
    value -= this.step;
    input.value = value.toString();
    this._emitEvent();
  }

  increase(event: MouseEvent, input: HTMLInputElement) {
    event.preventDefault();
    event.stopPropagation();
    let value = +input.value;
    value += this.step;
    input.value = value.toString();
    this._emitEvent();
  }

  isDecreaseDisabled() {
    const value = this._input.nativeElement.value;

    return ((typeof this.min === 'number' && value) && +value <= this.min) || this.readonly || this.disabled;
  }

  isIncreaseDisabled() {
    const value = this._input.nativeElement.value;

    if (typeof this.max === 'undefined') {
      return false;
    }

    return ((typeof this.min === 'number' && value) && +value >= this.max) || this.readonly || this.disabled;
  }

  inputChange(event: any) {
    this._value = this._input.nativeElement.value ? +this._input.nativeElement.value : undefined;
    this._emitEvent();
  }

  private _emitEvent() {
    const value = this._input.nativeElement.value ? +this._input.nativeElement.value : undefined;
    this.value = value;
    this.onChange(value);
    this.valueChange.emit(value);
  }

  ngDoCheck() {
    if (this.ngControl) {
      this.updateErrorState();
    }
  }

  onContainerClick(event: MouseEvent) {
    if ((event.target as Element).tagName.toLowerCase() != 'input') {
      this._elementRef.nativeElement.querySelector('input').focus();
    }
  }

  private updateErrorState() {
    const parent = this._parentFormGroup || this._parentForm;
    let oldState = this.errorState;
    let newState = (this.ngControl?.invalid || !this.value) && this.touched;

    if (parent) {
     newState = (this.ngControl?.invalid || !this.value) && (this.touched || parent.submitted);
    }

    if (oldState !== newState) {
      this.errorState = newState;
      this.stateChanges.next();
    }
  }
}
