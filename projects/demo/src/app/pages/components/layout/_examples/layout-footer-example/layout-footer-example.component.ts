import { Component } from '@angular/core';
import { LayoutBodyComponent } from '@elementar-ui/components/layout';
import { LayoutComponent } from '@elementar-ui/components/layout';
import { LayoutFooterComponent } from '@elementar-ui/components/layout';

@Component({
  selector: 'app-layout-footer-example',
  imports: [
    LayoutBodyComponent,
    LayoutComponent,
    LayoutFooterComponent
  ],
  templateUrl: './layout-footer-example.component.html',
  styleUrl: './layout-footer-example.component.scss'
})
export class LayoutFooterExampleComponent {

}
