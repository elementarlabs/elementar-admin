import { Component } from '@angular/core';
import { LayoutBodyComponent } from '@elementar-ui/components';
import { LayoutComponent } from '@elementar-ui/components';
import { LayoutFooterComponent } from '@elementar-ui/components';

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
