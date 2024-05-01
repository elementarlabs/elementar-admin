import { Component, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { PageComponent } from '@meta/page/page.component';
import { PageContentDirective } from '@meta/page/page-content.directive';

@Component({
  standalone: true,
  imports: [
    PageComponent,
    PageContentDirective
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {
  private _document = inject(DOCUMENT);
  themes: {[prop: string]: string} = {
    'rose-red': 'rose-red.css',
    'magenta-violet': 'magenta-violet.css',
    'cyan-orange': 'cyan-orange.css',
  };
  selectedThemeName: string;

  loadTheme(themeName: string) {
    const head  = this._document.getElementsByTagName('head')[0];
    const link  = this._document.createElement('link');
    const themePath = this.themes[themeName];
    link.id = themeName;
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = `/${themePath}`;
    link.media = 'all';
    head.appendChild(link);
    this.selectedThemeName = themeName;
  }

  isSelected(themeName: string): boolean {
    return this.selectedThemeName === themeName;
  }
}
