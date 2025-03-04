import {
  Directive,
  ElementRef,
  inject, input,
  OnInit, output,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[emrPinInput]',
  exportAs: 'emrPinInput',
  host: {
    'class': 'emr-pin-input',
    '(focus)': '_handleFocus()',
    '(blur)': '_handleBlur()'
  }
})
export class PinInputDirective implements OnInit {
  private _elementRef = inject(ElementRef);
  private _renderer = inject(Renderer2);
  private _placeholder: string;

  index = input<number>();
  acceptOnly = input<RegExp>();

  readonly valuePaste = output<string>();

  get api() {
    return {
      focus: () => {
        this._elementRef.nativeElement.focus();
      },
      nativeElement: this._elementRef.nativeElement
    }
  }

  ngOnInit() {
    this._placeholder = (this._elementRef.nativeElement as HTMLInputElement).getAttribute('placeholder') || '';
  }

  protected _handleFocus() {
    this._renderer.removeAttribute(this._elementRef.nativeElement, 'placeholder');
  }

  protected _handleBlur() {
    this._renderer.setAttribute(this._elementRef.nativeElement, 'placeholder', this._placeholder);
  }
}
