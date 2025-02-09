import { Directive, output, input } from '@angular/core';

@Directive({
  selector: '[inputChange]',
  host: {
    '(input)': 'inputChanges($event)'
  }
})
export class ColorPickerInputDirective {
  min = input('');
  max = input('');

  readonly inputChange = output<number>();

  protected inputChanges(event: any): void {
    const element = event.target as HTMLInputElement || event.srcElement as HTMLInputElement;
    const value = element.value;

    const numeric = parseFloat(value);
    if (!isNaN(numeric) && numeric >= parseInt(this.min(), 10) && numeric <= parseInt(this.max(), 10)) {
      this.inputChange.emit(numeric);
    }
  }
}
