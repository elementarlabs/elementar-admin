import { inject, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safeHtml',
  standalone: true
})
export class SafeHtmlPipe implements PipeTransform {
  private _domSanitizer = inject(DomSanitizer);

  transform(value: any): any {
    return this._domSanitizer.bypassSecurityTrustHtml(value);
  }
}
