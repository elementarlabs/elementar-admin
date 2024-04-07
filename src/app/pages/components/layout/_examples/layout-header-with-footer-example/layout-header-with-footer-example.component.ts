import { Component } from '@angular/core';
import { LayoutBodyComponent } from '@components/layout/layout-body/layout-body.component';
import { LayoutComponent } from '@components/layout/layout/layout.component';
import { LayoutFooterComponent } from '@components/layout/layout-footer/layout-footer.component';
import { LayoutHeaderComponent } from '@components/layout/layout-header/layout-header.component';

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
