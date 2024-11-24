import {
  booleanAttribute,
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
  Renderer2
} from '@angular/core';
import { ALERT, AlertVariant } from '../alert.properties';
import { coerceNumberProperty, NumberInput } from '@angular/cdk/coercion';
import { AlertIconDirective } from '../alert-icon.directive';
import { NgIf, NgTemplateOutlet } from '@angular/common';

@Component({
    selector: 'emr-alert',
    exportAs: 'emrAlert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.scss'],
    providers: [
        {
            provide: ALERT,
            useExisting: AlertComponent
        }
    ],
    host: {
        'class': 'emr-alert',
        '[class.is-bordered]': 'bordered',
    },
    imports: [NgIf, NgTemplateOutlet]
})
export class AlertComponent implements  OnInit {
  private _renderer = inject(Renderer2);
  private _elementRef = inject(ElementRef);

  @ContentChild(AlertIconDirective)
  iconRef!: AlertIconDirective;

  @Input() data: any;
  @Input()
  set autoClose(value: NumberInput) {
    clearTimeout(this._autoCloseTimeout);
    value = coerceNumberProperty(value);

    if (!value) {
      return;
    }

    clearTimeout(this._autoCloseTimeout);
    this._autoCloseTimeout = setTimeout(() => {
      this._close();
    }, value);
  }
  private _autoCloseTimeout: any;

  @Input()
  set variant(variant: AlertVariant) {
    this._variant = variant;
    this._renderer.setAttribute(this._elementRef.nativeElement, 'emr-alert-variant', this._variant);
  }
  get variant(): AlertVariant {
    return this._variant;
  }
  private _variant: AlertVariant = 'default';

  @Input({ transform: booleanAttribute })
  bordered = false;

  @Output() readonly closed = new EventEmitter<any>();

  get api() {
    return {
      close: () => this._close()
    };
  }

  ngOnInit() {
    this._renderer.setAttribute(this._elementRef.nativeElement, 'emr-alert-variant', this._variant);
  }

  private _close() {
    clearTimeout(this._autoCloseTimeout);
    this.closed.emit(this.data);
    this._elementRef.nativeElement.remove();
  }
}
