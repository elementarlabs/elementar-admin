import { FocusMonitor } from '@angular/cdk/a11y';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DoCheck,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  Optional,
  Self,
  booleanAttribute, inject,
  viewChild, input, effect, output, DestroyRef, computed
} from '@angular/core';
import { FormGroupDirective, NG_VALIDATORS, NgControl, NgForm, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ErrorStateMatcher, MatRipple } from '@angular/material/core';
import { MatFormFieldControl } from '@angular/material/form-field';
import { MatMenu, MatMenuTrigger, MatMenuItem } from '@angular/material/menu';
import {
  AsYouType,
  CountryCode as CC,
  PhoneNumber,
  getExampleNumber,
  parsePhoneNumberFromString,
} from 'libphonenumber-js';
import { Subject } from 'rxjs';
import { CountryCode, Examples } from '../data/country-code';
import { Country } from '../model/country.model';
import { PhoneNumberFormat } from '../model/phone-number-format.model';
import { phoneValidator } from '../phone.validator';
import { NgClass } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { MatDivider } from '@angular/material/divider';
import { MatInput } from '@angular/material/input';
import { SearchPipe } from '../search.pipe';
import { IconComponent } from '../../icon';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'emr-phone-input',
  exportAs: 'emrPhoneInput',
  templateUrl: './phone-input.component.html',
  styleUrl: './phone-input.component.scss',
  imports: [
    MatRipple,
    MatMenuTrigger,
    IconComponent,
    MatIcon,
    MatMenu,
    ReactiveFormsModule,
    FormsModule,
    MatMenuItem,
    NgClass,
    MatDivider,
    MatInput,
    SearchPipe
  ],
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
    'class': 'emr-phone-input',
    '[class.is-floating]': 'shouldLabelFloat',
  }
})
export class PhoneInputComponent implements OnInit, DoCheck, OnDestroy {
  private _destroyRef = inject(DestroyRef);
  private _changeDetectorRef = inject(ChangeDetectorRef);
  private countryCodeData = inject(CountryCode);
  private _focusMonitor = inject(FocusMonitor);
  private _elementRef = inject(ElementRef<HTMLElement>)
  private ngControl = inject(NgControl, { optional: true });
  private _errorStateMatcher = inject(ErrorStateMatcher);
  private _parentForm = inject(NgForm, { optional: true });

  static nextId = 0;

  readonly matMenu = viewChild.required(MatMenu);
  readonly menuSearchInput = viewChild<ElementRef<HTMLInputElement>>('menuSearchInput');
  readonly focusable = viewChild.required<ElementRef>('focusable');

  get id(): string {
    return `emr-phone-input-${PhoneInputComponent.nextId++}`;
  }

  get shouldLabelFloat(): boolean {
    return this.focused || !this.empty;
  }

  autocomplete = input<AutoFill>('on');
  errorStateMatcher = input<ErrorStateMatcher>(this._errorStateMatcher);
  onlyCountries = input<string[]>([]);
  preferredCountries = input<string[]>([]);
  format = input<PhoneNumberFormat>('default');

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

  // @Input({ alias: 'disabled', transform: booleanAttribute })
  // set disabled(value: boolean) {
  //   this._disabled = coerceBooleanProperty(value);
  //   this.stateChanges.next(undefined);
  // }
  // get disabled(): boolean {
  //   return this._disabled;
  // }

  phoneDisabled = input(false, {
    alias: 'disabled',
    transform: booleanAttribute
  });

  isDisabled = computed(() => {
    return this._disabled || this.phoneDisabled();
  });

  get empty(): boolean {
    return !this.phoneNumber;
  }

  readonly countryChanged = output<Country>();

  private _placeholder?: string;
  private _required = false;
  private _disabled = false;
  stateChanges = new Subject<void>();
  focused = false;
  describedBy = '';
  phoneNumber?: string = '';
  allCountries: Country[] = [];
  preferredCountriesInDropDown: Country[] = [];
  selectedCountry: Country;
  numberInstance?: PhoneNumber;
  value?: any;
  searchCriteria?: string;

  private _previousFormattedNumber?: string;

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
    @Optional() @Self() _ngControl: NgControl,
    @Optional() _parentForm: NgForm,
    @Optional() _parentFormGroup: FormGroupDirective,
    _defaultErrorStateMatcher: ErrorStateMatcher,
  ) {
    this._focusMonitor
      .monitor(this._elementRef, true)
      .pipe(
        takeUntilDestroyed(this._destroyRef)
      )
      .subscribe((origin) => {
        if (this.focused && !origin) {
          this.onTouched();
        }

        this.focused = !!origin
        this.stateChanges.next();
      });

    this.fetchCountryData();

    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }

    effect(() => {
      this.phoneNumber = this.formattedPhoneNumber;
      this.stateChanges.next();
    });
  }

  ngOnInit() {
    if (this.onlyCountries().length) {
      this.allCountries = this.allCountries.filter((c) => this.onlyCountries().includes(c.iso2));
    }

    if (this.preferredCountries().length) {
      this.preferredCountries().forEach((iso2) => {
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

    if (this.numberInstance && this.numberInstance.country) {
      // If an existing number is present, we use it to determine selectedCountry
      this.selectedCountry = this.getCountry(this.numberInstance.country);
    } else {
      // if (this.preferredCountriesInDropDown.length) {
      //   this.selectedCountry = this.preferredCountriesInDropDown[0];
      // } else {
      //   this.selectedCountry = this.allCountries[0];
      // }
    }

    this.countryChanged.emit(this.selectedCountry);
    this._changeDetectorRef.markForCheck();
    this.stateChanges.next();
  }

  ngDoCheck(): void {
    if (this.ngControl) {
      const isInvalid = this.errorStateMatcher().isErrorState(
        this.ngControl.control,
        this._parentForm
      );
      this.errorState =
        (isInvalid && !this.ngControl.control?.value) || (!this.focused ? isInvalid : false);
    }
  }

  updateErrorState() {
  }

  ngOnDestroy() {
    this.stateChanges.complete();
    this._focusMonitor.stopMonitoring(this._elementRef);
  }

  public onPhoneNumberChange(): void {
    if (!this.phoneNumber) {
      this.value = '';
      this.propagateChange(this.value);
      this._changeDetectorRef.markForCheck();
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

    if (this.selectedCountry !== country) {
      this.reset();
    }

    this.selectedCountry = country;
    this._placeholder = this.selectedCountry.placeHolder;
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
      this.allCountries.push(country);
    });
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this._disabled = isDisabled;
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
    switch (this.format()) {
      case 'national':
        return this.numberInstance.formatNational();
      case 'international':
        return this.numberInstance.formatInternational();
      default:
        return this.numberInstance.nationalNumber.toString();
    }
  }

  private formatAsYouTypeIfEnabled(): void {
    if (this.format() === 'default') {
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
