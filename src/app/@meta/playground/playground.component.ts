import { Component, inject, Input, ViewChild } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MarkdownComponent, provideMarkdown } from 'ngx-markdown';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  AlertVariantsExampleComponent
} from '../../pages/components/alert/_examples/alert-variants-example/alert-variants-example.component';

@Component({
  selector: 'emr-playground',
  standalone: true,
  providers: [
    provideMarkdown()
  ],
  imports: [
    MatIconButton,
    MatIcon,
    MarkdownComponent,
    AlertVariantsExampleComponent
  ],
  templateUrl: './playground.component.html',
  styleUrl: 'playground.component.scss'
})
export class PlaygroundComponent {
  private _snackBar = inject(MatSnackBar);

  @Input()
  htmlSrc: string;

  @Input()
  tsSrc: string;

  @Input()
  cssSrc: string;

  @ViewChild('markdownRef')
  private _markdownRef: any;

  showSource = false;
  currentTab = 'html';

  get hasScr(): boolean {
    return !!this.htmlSrc || !!this.tsSrc || !!this.cssSrc;
  }

  get src(): string | null {
    if (this.isCurrentTab('html')) {
      return this.htmlSrc;
    }

    if (this.isCurrentTab('ts')) {
      return this.tsSrc;
    }

    if (this.isCurrentTab('css')) {
      return this.cssSrc;
    }

    return null;
  }

  contentCopy(): void {
    const text = this._markdownRef.element.nativeElement.querySelector('pre code').innerText;
    navigator.clipboard.writeText(text);
    this._snackBar.open('The source code has been copied to your clipboard', '', {
      duration: 3000
    });
  }

  toggleSource(): void {
    this.showSource = !this.showSource;
  }

  isCurrentTab(tabId: string): boolean {
    return this.currentTab === tabId;
  }

  selectTab(tabId: string): void {
    this.currentTab = tabId;
  }
}
