import { Component } from '@angular/core';
import { LayoutBodyComponent, LayoutComponent, LayoutHeaderComponent } from '@elementar-ui/components/layout';

@Component({
  selector: 'app-layout-header-example',
  imports: [
    LayoutBodyComponent,
    LayoutComponent,
    LayoutHeaderComponent,
  ],
  templateUrl: './layout-header-example.component.html',
  styleUrl: './layout-header-example.component.scss'
})
export class LayoutHeaderExampleComponent {

}
