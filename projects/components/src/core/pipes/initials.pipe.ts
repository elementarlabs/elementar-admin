import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initials',
  standalone: true
})
export class InitialsPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) {
      return '';
    }

    const initials = [...value.toString().matchAll(/(\p{L}{1})\p{L}+/gu)];
    const result = ((initials.shift()?.[1] || '') + (initials.pop()?.[1] || '')).toUpperCase();
    return result ? result : value[0];
  }
}
