import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy',
  standalone: true
})
export class OrderByPipe implements PipeTransform {
  transform(value: any, property: string, direction: 'asc' | 'desc' = 'asc'): any {
    if (!Array.isArray(value)) {
      throw new Error('Order By value should be an array');
    }

    const sorted = value.sort((a, b) => {
      if (a[property] < b[property]) {
        return -1;
      } else if (a[property] > b[property]) {
        return 1;
      } else {
        return 0;
      }
    });

    if (direction === 'asc') {
      return sorted;
    } else if (direction === 'desc') {
      return sorted.reverse();
    }
  }
}
