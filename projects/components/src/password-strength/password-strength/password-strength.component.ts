import {
  AfterContentChecked,
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  forwardRef,
  Input,
  numberAttribute,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, UntypedFormControl, ValidatorFn, Validators } from '@angular/forms';
import { Criteria } from '../enum';
import { PasswordStrengthValidator } from '../validator';
import { RegExpValidator } from '../validator/regexp.class';

@Component({
  selector: 'emr-password-strength',
  exportAs: 'emrPasswordStrength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordStrengthComponent),
      multi: true
    }
  ],
  host: {
    '[class.low]': 'isLow',
    '[class.weak]': 'isWeak',
    '[class.medium]': 'isMedium',
    '[class.strong]': 'isStrong',
    '[class.very-strong]': 'isVeryStrong',
  }
})
export class PasswordStrengthComponent implements OnInit, OnChanges, AfterContentChecked, ControlValueAccessor {
  @Input()
  password: string;

  @Input({ transform: booleanAttribute })
  externalError: boolean;

  @Input({ transform: booleanAttribute })
  enableLengthRule = true;

  @Input({ transform: booleanAttribute })
  enableLowerCaseLetterRule = true;

  @Input({ transform: booleanAttribute })
  enableUpperCaseLetterRule = true;

  @Input({ transform: booleanAttribute })
  enableDigitRule = true;

  @Input({ transform: booleanAttribute })
  enableSpecialCharRule = true;

  @Input({ transform: numberAttribute })
  min = 8;

  @Input({ transform: numberAttribute })
  max = 30;

  @Input()
  customValidator: RegExp;

  @Input({ transform: numberAttribute })
  warnThreshold = 21;

  @Input({ transform: numberAttribute })
  accentThreshold = 81;

  @Output()
  onStrengthChanged: EventEmitter<number> = new EventEmitter();

  criteriaMap: Map<Criteria, RegExp> = new Map<Criteria, RegExp>();
  containAtLeastMinChars: boolean;
  containAtLeastOneLowerCaseLetter: boolean;
  containAtLeastOneUpperCaseLetter: boolean;
  containAtLeastOneDigit: boolean;
  containAtLeastOneSpecialChar: boolean;
  containAtCustomChars: boolean;

  // TO ACCESS VIA CONTENT CHILD
  passwordFormControl: UntypedFormControl = new UntypedFormControl();
  passwordConfirmationFormControl: UntypedFormControl = new UntypedFormControl();

  validatorsArray: ValidatorFn[] = [];
  Validators: ValidatorFn | null;
  passwordStrengthValidator = new PasswordStrengthValidator();

  private _strength = 0;

  get strength(): number {
    return this._strength ? this._strength : 0;
  }

  get isLow(): boolean {
    return this.strength === 20;
  }

  get isWeak(): boolean {
    return this.strength === 40;
  }

  get isMedium(): boolean {
    return this.strength === 60;
  }

  get isStrong(): boolean {
    return this.strength === 80;
  }

  get isVeryStrong(): boolean {
    return this.strength === 100;
  }

  propagateChange = (_: any) => {
  };

  ngOnInit(): void {
    this.setRulesAndValidators();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ((changes['externalError'] && changes['externalError'].firstChange) || (changes['password'] && changes['password'].firstChange)) {
      return;
    } else if (changes['externalError'] && changes['externalError'].currentValue) {
      // this._color = 'weak';
      return;
    } else if (changes['password'] && changes['password'].previousValue === changes['password'].currentValue && !changes['password'].firstChange) {
      this.calculatePasswordStrength();
    } else {
      this.password && this.password.length > 0 ?
        this.calculatePasswordStrength() : this.reset();
    }
  }

  parseCustomValidatorsRegex(value: string | RegExp = this.customValidator) {
    if (value instanceof RegExp) {
      return this.customValidator;
    } else if (value === 'string') {
      return RegExp(this.customValidator);
    }

    throw new Error('');
  }

  setRulesAndValidators(): void {
    this.validatorsArray = [];
    this.criteriaMap = new Map<Criteria, RegExp>();
    this.passwordConfirmationFormControl
      // @ts-ignore
      .setValidators(Validators.compose([
        Validators.required, this.passwordStrengthValidator.confirm(this.password)
      ]));
    this.validatorsArray.push(Validators.required);
    if (this.enableLengthRule) {
      this.criteriaMap.set(Criteria.at_least_eight_chars, RegExp(`^.{${this.min},${this.max}}$`));
      this.validatorsArray.push(Validators.minLength(this.min));
      this.validatorsArray.push(Validators.maxLength(this.max));
    }
    if (this.enableLowerCaseLetterRule) {
      this.criteriaMap.set(Criteria.at_least_one_lower_case_char, RegExpValidator.lowerCase);
      this.validatorsArray.push(Validators.pattern(RegExpValidator.lowerCase));
    }
    if (this.enableUpperCaseLetterRule) {
      this.criteriaMap.set(Criteria.at_least_one_upper_case_char, RegExpValidator.upperCase);
      this.validatorsArray.push(Validators.pattern(RegExpValidator.upperCase));
    }
    if (this.enableDigitRule) {
      this.criteriaMap.set(Criteria.at_least_one_digit_char, RegExpValidator.digit);
      this.validatorsArray.push(Validators.pattern(RegExpValidator.digit));
    }
    if (this.enableSpecialCharRule) {
      this.criteriaMap.set(Criteria.at_least_one_special_char, RegExpValidator.specialChar);
      this.validatorsArray.push(Validators.pattern(RegExpValidator.specialChar));
    }
    if (this.customValidator) {
      this.criteriaMap.set(Criteria.at_custom_chars, this.parseCustomValidatorsRegex());
      this.validatorsArray.push(Validators.pattern(this.parseCustomValidatorsRegex()));
    }

    this.criteriaMap.forEach((value: any, key: string) => {
      // @ts-ignore
      this.validatorsArray.push(this.passwordStrengthValidator.validate(key, value));
    });

    this.passwordFormControl.setValidators(Validators.compose([...this.validatorsArray]));
    this.Validators = Validators.compose([...this.validatorsArray]);
  }

  calculatePasswordStrength(): void {
    const requirements: Array<boolean> = [];
    const unit = 100 / this.criteriaMap.size;
    requirements.push(
      this.enableLengthRule ? this._containAtLeastMinChars() : false,
      this.enableLowerCaseLetterRule ? this._containAtLeastOneLowerCaseLetter() : false,
      this.enableUpperCaseLetterRule ? this._containAtLeastOneUpperCaseLetter() : false,
      this.enableDigitRule ? this._containAtLeastOneDigit() : false,
      this.enableSpecialCharRule ? this._containAtLeastOneSpecialChar() : false,
      this.customValidator ? this._containCustomChars() : false
    );
    this._strength = requirements.filter(v => v).length * unit;
    this.propagateChange(this.strength);
    this.onStrengthChanged.emit(this.strength);
    this.setRulesAndValidators();
  }

  reset() {
    this._strength = 0;
    this.containAtLeastMinChars = false;
    this.containAtLeastOneLowerCaseLetter = false;
    this.containAtLeastOneUpperCaseLetter = false;
    this.containAtLeastOneDigit = false;
    this.containAtCustomChars = false;
    this.containAtLeastOneSpecialChar = false;
  }

  writeValue(obj: any): void {
    if (obj) {
      this._strength = obj;
    }
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
    // throw new Error("Method not implemented.");
  }

  setDisabledState?(isDisabled: boolean): void {
    // throw new Error("Method not implemented.");
  }

  private _containAtLeastMinChars(): boolean {
    this.containAtLeastMinChars = this.password.length >= this.min;
    return this.containAtLeastMinChars;
  }

  private _containAtLeastOneLowerCaseLetter(): boolean {
    // @ts-ignore
    this.containAtLeastOneLowerCaseLetter = this.criteriaMap
      .get(Criteria.at_least_one_lower_case_char)
      .test(this.password)
    ;
    return this.containAtLeastOneLowerCaseLetter;
  }

  private _containAtLeastOneUpperCaseLetter(): boolean {
    // @ts-ignore
    this.containAtLeastOneUpperCaseLetter = this.criteriaMap
      .get(Criteria.at_least_one_upper_case_char)
      .test(this.password)
    ;
    return this.containAtLeastOneUpperCaseLetter;
  }

  private _containAtLeastOneDigit(): boolean {
    // @ts-ignore
    this.containAtLeastOneDigit = this.criteriaMap
      .get(Criteria.at_least_one_digit_char)
      .test(this.password)
    ;
    return this.containAtLeastOneDigit;
  }

  private _containAtLeastOneSpecialChar(): boolean {
    // @ts-ignore
    this.containAtLeastOneSpecialChar = this.criteriaMap
      .get(Criteria.at_least_one_special_char)
      .test(this.password)
    ;
    return this.containAtLeastOneSpecialChar;
  }

  private _containCustomChars(): boolean {
    // @ts-ignore
    this.containAtCustomChars = this.criteriaMap
      .get(Criteria.at_custom_chars)
      .test(this.password)
    ;
    return this.containAtCustomChars;
  }

  ngAfterContentChecked(): void {
    if (this.password) {
      this.calculatePasswordStrength();
    }
  }
}
