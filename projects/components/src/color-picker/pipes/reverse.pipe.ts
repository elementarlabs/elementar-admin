import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'reverse',
    standalone: false
})
export class ReversePipe implements PipeTransform {
  transform(arr: Array<any>, isReversed: boolean = true) {
    if (isReversed) {
        return arr.slice().reverse();
    }

    return arr;
  }
}
