import { Component } from '@angular/core';
import { LayoutBodyComponent } from '@elementar/components/layout';
import { LayoutComponent } from '@elementar/components/layout';
import { LayoutFooterComponent } from '@elementar/components/layout';

@Component({
  selector: 'app-layout-footer-example',
  standalone: true,
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
