import { Component } from '@angular/core';
import { LayoutBodyComponent } from '@elementar-ui/components';
import { LayoutComponent } from '@elementar-ui/components';
import { LayoutFooterComponent } from '@elementar-ui/components';
import { LayoutHeaderComponent } from '@elementar-ui/components';

@Component({
  selector: 'app-layout-header-with-footer-example',
  imports: [
    LayoutBodyComponent,
    LayoutComponent,
    LayoutFooterComponent,
    LayoutHeaderComponent
  ],
  templateUrl: './layout-header-with-footer-example.component.html',
  styleUrl: './layout-header-with-footer-example.component.scss'
})
export class LayoutHeaderWithFooterExampleComponent {

}
