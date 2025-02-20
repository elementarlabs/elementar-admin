import { Component, inject } from '@angular/core';
import { BreadcrumbsGlobalComponent, BreadcrumbsStore } from '@elementar-ui/components';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-breadcrumbs-global-example',
  imports: [
    BreadcrumbsGlobalComponent,
    MatButton
  ],
  templateUrl: './breadcrumbs-global-example.component.html',
  styleUrl: './breadcrumbs-global-example.component.scss'
})
export class BreadcrumbsGlobalExampleComponent {
  private _breadcrumbsStore = inject(BreadcrumbsStore);

  constructor() {
    this._breadcrumbsStore.setBreadcrumbs([
      {
        id: 1,
        name: 'Account',
        type: null
      },
      {
        id: 2,
        name: 'Settings',
        type: null
      }
    ]);
  }

  setBreadcrumbs() {
    this._breadcrumbsStore.setBreadcrumbs([
      {
        id: 1,
        title: 'author',
        name: 'John D. Barrow',
        type: null
      },
      {
        id: 2,
        title: 'book',
        name: 'The Artful Universe',
        type: null
      }
    ]);
  }
}
