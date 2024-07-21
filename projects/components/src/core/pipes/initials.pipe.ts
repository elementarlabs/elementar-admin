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

    const rgx = new RegExp(/(\p{L}{1})\p{L}+/, 'gu');
    const initials = [...value.toString().matchAll(rgx)] || [];
    const result = ((initials.shift()?.[1] || '') + (initials.pop()?.[1] || '')).toUpperCase();
    return result ? result : value[0];
  }
}
