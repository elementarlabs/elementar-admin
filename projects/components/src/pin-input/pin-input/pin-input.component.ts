import {
  booleanAttribute,
  Component, computed,
  forwardRef,
  inject, input,
  numberAttribute,
  OnInit,
  viewChildren
} from '@angular/core';
import {
  ControlValueAccessor,
  FormArray,
  FormBuilder,
  FormGroup,
  NG_VALUE_ACCESSOR,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';
import { PinInputDirective } from '../pin-input.directive';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'emr-pin-input',
  exportAs: 'emrPinInput',
  imports: [
    ReactiveFormsModule,
    MatFormField,
    MatInput,
    PinInputDirective
  ],
  templateUrl: './pin-input.component.html',
  styleUrl: './pin-input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PinInputComponent),
      multi: true
    }
  ],
  host: {
    'class': 'emr-pin-input',
    '[class.is-disabled]': 'isDisabled()',
    '(paste)': '_valuePaste($event)',
    '(keydown)': '_handleKeyDown($event)',
    '(keyup)': '_handleKeyUp($event)',
  }
})
export class PinInputComponent implements ControlValueAccessor, OnInit {
  private _fb = inject(FormBuilder);
  readonly inputs = viewChildren(PinInputDirective);

  length = input(4, {
    transform: numberAttribute
  });
  placeholder = input('');
  acceptOnly = input(/^[0-9]+$/);
  disabled = input(false, {
    transform: booleanAttribute
  });
  invalid = input(false, {
    transform: booleanAttribute
  });

  protected form: FormGroup;
  private _disabled = false;
  protected isDisabled = computed(() => {
    return this._disabled || this.disabled();
  })

  onChange: any = () => {};
  onTouched: any = () => {};

  get controls(): any[] {
    return (this.form.get('value') as FormArray).controls;
  }

  ngOnInit() {
    const inputs = [];

    for (let i = 0; i < this.length(); i++) {
      inputs.push(
        this._fb.control({ value: '', disabled: this.disabled() }, [Validators.required])
      );
    }

    this.form = this._fb.group({
      value: this._fb.array(inputs)
    });
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this._disabled = coerceBooleanProperty(isDisabled);
  }

  writeValue(value: any): void {
    if (!value) {
      this.controls.forEach(control => {
        control.setValue('');
      });

      return;
    }

    value = String(value);

    for (let i = 0; i < value.length; i++) {
      const control = this.controls[i];

      if (control && value[i].match(this.acceptOnly)) {
        control.setValue(value[i]);
      }
    }
  }

  protected _valuePaste(event: ClipboardEvent) {
      event.preventDefault();
      event.stopPropagation();
      // const value = event.clipboardData?.getData('text/plain');
  }

  protected _handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      return;
    }

    if (event.key === 'Delete' || event.key === 'Backspace' || event.key === 'Tab') {
      const element = event.target as HTMLInputElement;

      if (event.key === 'Backspace' && !element.value) {
        this.inputs().forEach((inputDirective, index) => {
          const element = event.target as HTMLInputElement;

          if (inputDirective.api.nativeElement === element) {
            const prevControl = this.inputs().at(index - 1);

            if (prevControl) {
              prevControl.api.focus();
            }
          }
        });
      }

      return;
    }

    event.preventDefault();
    event.stopPropagation();
  }

  protected _handleKeyUp(event: KeyboardEvent) {
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      return;
    }

    if (event.key === 'Shift' || (event.keyCode >= 112 && event.keyCode <= 123)) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    if (event.key === 'Delete' || event.key === 'Backspace' || event.key === 'Tab') {
      this.onChange(this.form.value.value.join(''));
      return;
    }

    if (!event.key.match(this.acceptOnly())) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    this.inputs().forEach((inputDirective, index) => {
      const element = event.target as HTMLInputElement;

      if (inputDirective.api.nativeElement === element) {
        const control = this.controls[index];
        control.setValue(event.key);
        const nextControl = this.inputs().at(index + 1);

        if (nextControl) {
          nextControl.api.focus();
        }
      }
    });
    this.onChange(this.form.value.value.join(''));
  }
}
