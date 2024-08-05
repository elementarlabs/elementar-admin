import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shuffleArray',
  standalone: true
})
export class ShuffleArrayPipe implements PipeTransform {
  transform<T>(value: T[]): T[] {
    return [...value.sort(() => .5 - Math.random())];
  }
}
