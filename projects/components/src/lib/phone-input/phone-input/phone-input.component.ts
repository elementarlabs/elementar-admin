import { FocusMonitor } from '@angular/cdk/a11y';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DoCheck,
  ElementRef,
  EventEmitter,
  HostBinding,
  Input,
  OnDestroy,
  OnInit,
  Optional,
  Output,
  Self,
  ViewChild,
  booleanAttribute,
} from '@angular/core';
import {
  FormGroupDirective,
  NG_VALIDATORS,
  NgControl,
  NgForm
} from '@angular/forms';
import {
  ErrorStateMatcher,
  _AbstractConstructor,
  mixinErrorState,
} from '@angular/material/core';
import { MatFormFieldControl } from '@angular/material/form-field';
import { MatMenu } from '@angular/material/menu';
import {
  AsYouType,
  CountryCode as CC,
  E164Number,
  NationalNumber,
  PhoneNumber,
  getExampleNumber,
  parsePhoneNumberFromString,
} from 'libphonenumber-js';
import { Subject } from 'rxjs';
import { CountryCode, Examples } from '../data/country-code';
import { Country } from '../model/country.model';
import { PhoneNumberFormat } from '../model/phone-number-format.model';
import { phoneValidator } from '../phone.validator';
// import { SearchPipe } from '../search.pipe';

class EmrPhoneInputBase {
  constructor(
    public _defaultErrorStateMatcher: ErrorStateMatcher,
    public _parentForm: NgForm,
    public _parentFormGroup: FormGroupDirective,
    public ngControl: NgControl,
  ) { }
}

const _emrPhoneInputMixinBase: typeof EmrPhoneInputBase = mixinErrorState(
  EmrPhoneInputBase as _AbstractConstructor<any>
)

@Component({
  selector: 'emr-phone-input',
  exportAs: 'emrPhoneInput',
  templateUrl: './phone-input.component.html',
  styleUrls: ['./phone-input.component.scss'],
  providers: [
    CountryCode,
    {
      provide: MatFormFieldControl,
      useExisting: PhoneInputComponent
    },
    {
      provide: NG_VALIDATORS,
      useValue: phoneValidator,
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'emr-phone-input'
  }
})
export class PhoneInputComponent
  extends _emrPhoneInputMixinBase
  implements OnInit, DoCheck, OnDestroy
{
  static nextId = 0;
  @ViewChild(MatMenu)
  matMenu!: MatMenu;

  @ViewChild('menuSearchInput', { static: false })
  menuSearchInput?: ElementRef<HTMLInputElement>;

  @ViewChild('focusable', { static: false })
  focusable!: ElementRef;

  @HostBinding()
  id = `emr-phone-input-${PhoneInputComponent.nextId++}`;

  @HostBinding('class.is-floating')
  get shouldLabelFloat(): boolean {
    return this.focused || !this.empty;
  }

  @Input()
  autocomplete: 'off' | 'tel' = 'off';

  @Input()
  cssClass?: string;

  @Input() enablePlaceholder = true;
  @Input() enableSearch = false;
  @Input() errorStateMatcher: ErrorStateMatcher = this._defaultErrorStateMatcher;
  @Input() inputPlaceholder: string = '';
  @Input() name?: string;
  @Input() onlyCountries: string[] = [];
  @Input() preferredCountries: string[] = [];
  @Input() resetOnChange = false;
  @Input() searchPlaceholder = 'Search ...';
  @Input()
  set format(value: PhoneNumberFormat) {
    this._format = value;
    this.phoneNumber = this.formattedPhoneNumber;
    this.stateChanges.next();
  }
  get format(): PhoneNumberFormat {
    return this._format;
  }

  @Input()
  set placeholder(value: string) {
    this._placeholder = value;
    this.stateChanges.next(undefined);
  }
  get placeholder(): string {
    return this._placeholder || '';
  }

  @Input({ alias: 'required', transform: booleanAttribute })
  set required(value: boolean) {
    this._required = coerceBooleanProperty(value);
    this.stateChanges.next(undefined);
  }
  get required(): boolean {
    return this._required;
  }

  @Input({ alias: 'disabled', transform: booleanAttribute })
  set disabled(value: boolean) {
    this._disabled = coerceBooleanProperty(value);
    this.stateChanges.next(undefined);
  }
  get disabled(): boolean {
    return this._disabled;
  }

  get empty(): boolean {
    return !this.phoneNumber;
  }

  @Output()
  countryChanged: EventEmitter<Country> = new EventEmitter<Country>();

  private _placeholder?: string;
  private _required = false;
  private _disabled = false;
  stateChanges = new Subject<void>();
  focused = false;
  describedBy = '';
  phoneNumber?: E164Number | NationalNumber = '';
  allCountries: Country[] = [];
  preferredCountriesInDropDown: Country[] = [];
  selectedCountry!: Country;
  numberInstance?: PhoneNumber;
  value?: any;
  searchCriteria?: string;

  private _previousFormattedNumber?: string;
  private _format: PhoneNumberFormat = 'default';

  static getPhoneNumberPlaceHolder(countryISOCode: any): string | undefined {
    try {
      return getExampleNumber(countryISOCode, Examples)?.number.toString();
    } catch (e) {
      return e as any;
    }
  };

  onTouched = () => {}
  propagateChange = (_: any) => {}

  private errorState?: boolean;

  constructor(
    private _changeDetectorRef: ChangeDetectorRef,
    private countryCodeData: CountryCode,
    private _focusMonitor: FocusMonitor,
    private _elementRef: ElementRef<HTMLElement>,
    @Optional() @Self() _ngControl: NgControl,
    @Optional() _parentForm: NgForm,
    @Optional() _parentFormGroup: FormGroupDirective,
    _defaultErrorStateMatcher: ErrorStateMatcher,
  ) {
    super(_defaultErrorStateMatcher, _parentForm, _parentFormGroup, _ngControl);

    _focusMonitor.monitor(_elementRef, true).subscribe((origin) => {
      if (this.focused && !origin) {
        this.onTouched();
      }

      this.focused = !!origin
      this.stateChanges.next();
    })

    this.fetchCountryData()
    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }
  }

  ngOnInit() {
    if (this.preferredCountries.length) {
      this.preferredCountries.forEach((iso2) => {
        const preferredCountry = this.allCountries
          .filter((c) => {
            return c.iso2 === iso2
          })
          .shift()
        ;

        if (preferredCountry) {
          this.preferredCountriesInDropDown.push(preferredCountry);
        }
      });
    }

    if (this.onlyCountries.length) {
      this.allCountries = this.allCountries.filter((c) => this.onlyCountries.includes(c.iso2));
    }

    if (this.numberInstance && this.numberInstance.country) {
      // If an existing number is present, we use it to determine selectedCountry
      this.selectedCountry = this.getCountry(this.numberInstance.country);
    } else {
      if (this.preferredCountriesInDropDown.length) {
        this.selectedCountry = this.preferredCountriesInDropDown[0];
      } else {
        this.selectedCountry = this.allCountries[0];
      }
    }

    this.countryChanged.emit(this.selectedCountry);
    this._changeDetectorRef.markForCheck();
    this.stateChanges.next();
  }

  ngDoCheck(): void {
    if (this.ngControl) {
      const isInvalide = this.errorStateMatcher.isErrorState(
        this.ngControl.control,
        this._parentForm
      );
      this.errorState =
        (isInvalide && !this.ngControl.control?.value) || (!this.focused ? isInvalide : false);
    }
  }

  ngOnDestroy() {
    this.stateChanges.complete();
    this._focusMonitor.stopMonitoring(this._elementRef);
  }

  public onPhoneNumberChange(): void {
    if (!this.phoneNumber) {
      return;
    }

    try {
      this.numberInstance = parsePhoneNumberFromString(
        this.phoneNumber.toString(),
        this.selectedCountry.iso2.toUpperCase() as CC,
      );
      this.formatAsYouTypeIfEnabled();
      this.value = this.numberInstance?.number;

      if (this.numberInstance && this.numberInstance.isValid()) {
        if (this.phoneNumber !== this.formattedPhoneNumber) {
          this.phoneNumber = this.formattedPhoneNumber;
        }
        if (
          this.selectedCountry.iso2 !== this.numberInstance.country &&
          this.numberInstance.country
        ) {
          this.selectedCountry = this.getCountry(this.numberInstance.country);
          this.countryChanged.emit(this.selectedCountry);
        }
      }
    } catch (e) {
      // if no possible numbers are there,
      // then the full number is passed so that validator could be triggered and proper error could be shown
      this.value = this.phoneNumber.toString();
    }

    this.propagateChange(this.value);
    this._changeDetectorRef.markForCheck();
  }

  public onCountrySelect(country: Country, el: any): void {
    if (this.phoneNumber) {
      this.phoneNumber = this.numberInstance?.nationalNumber;
    }

    if (this.resetOnChange && this.selectedCountry !== country) {
      this.reset();
    }

    this.selectedCountry = country;
    this.countryChanged.emit(this.selectedCountry);
    this.onPhoneNumberChange();
    el.focus();
  }

  public getCountry(code: CC): Country {
    return (this.allCountries.find((c) => c.iso2 === code.toLowerCase()) || {
      name: 'UN',
      iso2: 'UN',
      dialCode: undefined,
      priority: 0,
      areaCodes: undefined,
      flagClass: 'UN',
      placeHolder: '',
    }) as Country;
  }

  public onInputKeyPress(event: any): void {
    const pattern = /[0-9+\- ]/;

    if (!pattern.test(event.key)) {
      event.preventDefault();
    }
  }

  protected fetchCountryData(): void {
    this.countryCodeData.allCountries.forEach((c) => {
      const country: Country = {
        name: c[0].toString(),
        iso2: c[1].toString(),
        dialCode: c[2].toString(),
        priority: +c[3] || 0,
        areaCodes: (c[4] as string[]) || undefined,
        flagClass: c[1].toString().toUpperCase(),
        placeHolder: ''
      };

      if (this.enablePlaceholder) {
        country.placeHolder = PhoneInputComponent.getPhoneNumberPlaceHolder(
          country.iso2.toUpperCase()
        );
      }

      this.allCountries.push(country);
    })
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
    this._changeDetectorRef.markForCheck();
    this.stateChanges.next(undefined);
  }

  writeValue(value: any): void {
    if (value) {
      this.numberInstance = parsePhoneNumberFromString(value);

      if (this.numberInstance) {
        const countryCode = this.numberInstance.country;
        this.phoneNumber = this.formattedPhoneNumber;

        if (!countryCode) {
          return;
        }

        setTimeout(() => {
          this.selectedCountry = this.getCountry(countryCode);
          if (
            this.selectedCountry.dialCode &&
            !this.preferredCountries.includes(this.selectedCountry.iso2)
          ) {
            this.preferredCountriesInDropDown.push(this.selectedCountry);
          }
          this.countryChanged.emit(this.selectedCountry);

          // Initial value is set
          this._changeDetectorRef.markForCheck();
          this.stateChanges.next();
        }, 1);
      } else {
        this.phoneNumber = value;
      }
    }

    // Value is set from outside using setValue()
    this._changeDetectorRef.markForCheck();
    this.stateChanges.next(undefined);
  }

  setDescribedByIds(ids: string[]): void {
    this.describedBy = ids.join(' ');
  }

  onContainerClick(event: MouseEvent): void {
    if ((event.target as Element).tagName.toLowerCase() !== 'input') {
      this._elementRef.nativeElement.querySelector('input')!.focus();
    }
  }

  reset(): void {
    this.phoneNumber = '';
    this.propagateChange(null);
    this._changeDetectorRef.markForCheck();
    this.stateChanges.next(undefined);
  }

  private get formattedPhoneNumber(): string {
    if (!this.numberInstance) {
      return this.phoneNumber?.toString() || '';
    }
    switch (this.format) {
      case 'national':
        return this.numberInstance.formatNational();
      case 'international':
        return this.numberInstance.formatInternational();
      default:
        return this.numberInstance.nationalNumber.toString();
    }
  }

  private formatAsYouTypeIfEnabled(): void {
    if (this.format === 'default') {
      return
    }

    const asYouType: AsYouType = new AsYouType(this.selectedCountry.iso2.toUpperCase() as CC);

    // To avoid caret positioning we apply formatting only if the caret is at the end:
    if (!this.phoneNumber) {
      return;
    }

    if (this.phoneNumber?.toString().startsWith(this._previousFormattedNumber || '')) {
      this.phoneNumber = asYouType.input(this.phoneNumber.toString());
    }
    this._previousFormattedNumber = this.phoneNumber.toString();
  }
}
