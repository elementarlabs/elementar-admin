import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'chunks' })
export class ChunksPipe implements PipeTransform {
    transform(arr: any, chunkSize: number) {
        return arr.reduce((prev: any[], cur: any, i: number) => (i % chunkSize) ? prev : prev.concat([arr.slice(i, i + chunkSize)]), []);
    }
}
