import { Component } from '@angular/core';
import { LayoutBodyComponent } from '@elementar/components';
import { LayoutComponent } from '@elementar/components';
import { LayoutFooterComponent } from '@elementar/components';
import { LayoutHeaderComponent } from '@elementar/components';

@Component({
  selector: 'app-layout-header-with-footer-example',
  standalone: true,
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
