import { Component } from '@angular/core';
import { LayoutBodyComponent } from '@elementar-ui/components';
import { LayoutComponent } from '@elementar-ui/components';
import { LayoutHeaderComponent } from '@elementar-ui/components';

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
