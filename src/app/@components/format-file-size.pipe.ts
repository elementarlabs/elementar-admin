import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatFileSize',
  standalone: true
})
export class FormatFileSizePipe implements PipeTransform {
  transform(bytes: number, decimalPoint = 2): string {
    if (bytes == 0) {
      return '0 Bytes';
    }

    const k = 1000;
    const dm = decimalPoint || 2;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const index = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, index)).toFixed(dm)) + ' ' + sizes[index];
  }
}
