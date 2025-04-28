import { Component, inject } from '@angular/core';
import {
  BreadcrumbItemIconDefDirective,
  BreadcrumbsGlobalComponent,
  BreadcrumbsStore,
} from '@elementar-ui/components/breadcrumbs';
import { MatButton } from '@angular/material/button';
import { IconComponent } from '@elementar-ui/components/icon';

@Component({
  selector: 'app-breadcrumbs-global-example',
  imports: [
    BreadcrumbsGlobalComponent,
    MatButton,
    IconComponent,
    BreadcrumbItemIconDefDirective
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
        id: 0,
        icon: 'ph:house',
        type: null
      },
      {
        id: 1,
        title: 'author',
        name: 'John D. Barrow',
        icon: 'ph:user',
        type: null
      },
      {
        id: 2,
        title: 'book',
        name: 'The Artful Universe',
        icon: 'ph:book',
        type: null
      }
    ]);

    // Material icons
    // this._breadcrumbsStore.setBreadcrumbs([
    //   {
    //     id: 0,
    //     icon: 'home',
    //     type: null
    //   },
    //   {
    //     id: 1,
    //     title: 'author',
    //     name: 'John D. Barrow',
    //     icon: 'person',
    //     type: null
    //   },
    //   {
    //     id: 2,
    //     title: 'book',
    //     name: 'The Artful Universe',
    //     icon: 'book',
    //     type: null
    //   }
    // ]);
  }
}
