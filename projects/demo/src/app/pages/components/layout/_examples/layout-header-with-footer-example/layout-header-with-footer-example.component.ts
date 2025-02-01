import { Component } from '@angular/core';
import { LayoutBodyComponent } from '@elementar-ui/components/layout';
import { LayoutComponent } from '@elementar-ui/components/layout';
import { LayoutFooterComponent } from '@elementar-ui/components/layout';
import { LayoutHeaderComponent } from '@elementar-ui/components/layout';

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
