import {
  AfterContentInit,
  ChangeDetectorRef, ContentChildren, DestroyRef,
  Directive,
  EventEmitter,
  forwardRef,
  inject,
  OnInit,
  Output, QueryList,
} from '@angular/core';
import {
  MAT_OPTION_PARENT_COMPONENT,
  MatOptionParentComponent,
  MatOptionSelectionChange
} from '@angular/material/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatOption } from '@angular/material/select';
import { SelectionModel } from '@angular/cdk/collections';
import { defer, merge, Observable, startWith, Subject, switchMap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Directive({
  selector: '[emrMenuOptionGroup]',
  standalone: true,
  providers: [
    {
      provide: MAT_OPTION_PARENT_COMPONENT,
      useExisting: MenuOptionGroupDirective
    },
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MenuOptionGroupDirective),
      multi: true
    }
  ]
})
export class MenuOptionGroupDirective implements MatOptionParentComponent, OnInit, ControlValueAccessor, AfterContentInit {
  private _changeDetectorRef = inject(ChangeDetectorRef);
  private _destroyRef = inject(DestroyRef);

  disableRipple = false;
  multiple = false;
  inertGroups = false;
  hideSingleSelectionIndicator = false;

  _selectionModel: SelectionModel<MatOption>;

  private _value: any;

  @ContentChildren(MatOption, { descendants: true })
  options: QueryList<MatOption>;

  private _initialized = new Subject();

  @Output()
  readonly valueChange: EventEmitter<any> = new EventEmitter<any>();

  readonly optionSelectionChanges: Observable<MatOptionSelectionChange> = defer(() => {
    const options = this.options;

    if (options) {
      return options.changes.pipe(
        startWith(options),
        switchMap(() => merge(...options.map(option => option.onSelectionChange))),
      );
    }

    return this._initialized.pipe(switchMap(() => this.optionSelectionChanges));
  });

  onChange: any = () => {};
  onTouched: any = () => {};

  ngOnInit() {
    this._selectionModel = new SelectionModel<MatOption>(this.multiple);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  ngAfterContentInit() {
    this._selectOptionByValue();
    this.optionSelectionChanges
      .pipe(takeUntilDestroyed(this._destroyRef))
      .subscribe((res: MatOptionSelectionChange) => {
        this._value = res.source.value;
        this.options.forEach(option => {
          if (option.value !== this._value) {
            option.setInactiveStyles();
            option.deselect(false);
          }
        });
        this.onChange(this._value);
        this._changeDetectorRef.markForCheck();
      })
    ;
  }

  private _selectOptionByValue() {
    if (!this.options) {
      return;
    }

    this.options.forEach(option => option.setInactiveStyles());
    this.options.forEach(option => {
      if (option.value === this._value) {
        option.select(false);
        this._changeDetectorRef.markForCheck();
      }
    });
  }

  writeValue(newValue: any): void {
    if (newValue !== this._value) {
      this._value = newValue;
      this._selectOptionByValue();
    }
  }
}
