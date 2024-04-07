import { inject, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safeResourceUrl',
  standalone: true
})
export class SafeResourceUrlPipe implements PipeTransform {
  private _domSanitizer = inject(DomSanitizer);

  transform(value: string): any {
    return this._domSanitizer.bypassSecurityTrustResourceUrl(value);
  }
}
