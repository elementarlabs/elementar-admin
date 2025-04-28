import { Component, signal } from '@angular/core';
import {
  CookiePopupAcceptAllButtonDirective,
  CookiePopupAcceptNecessaryOnlyButtonDirective,
  CookiePopupAcceptType,
  CookiePopupComponent,
  CookiePopupTitleDirective
} from '@elementar-ui/components/cookie-popup';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-basic-cookie-popup-example',
  imports: [
    CookiePopupComponent,
    MatButton,
    CookiePopupTitleDirective,
    CookiePopupAcceptAllButtonDirective,
    CookiePopupAcceptNecessaryOnlyButtonDirective
  ],
  templateUrl: './basic-cookie-popup-example.component.html',
  styleUrl: './basic-cookie-popup-example.component.scss'
})
export class BasicCookiePopupExampleComponent {
  visible = signal(true);

  acceptType = signal<CookiePopupAcceptType | null>(null);

  onCookieAccepted(acceptType: CookiePopupAcceptType) {
    this.acceptType.set(acceptType);
  }
}
