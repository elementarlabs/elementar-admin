import { Component } from '@angular/core';
import { LayoutBodyComponent } from '@elementar-ui/components/layout';
import { LayoutComponent } from '@elementar-ui/components/layout';
import { LayoutSidebarComponent } from '@elementar-ui/components/layout';
import { LayoutAsideComponent } from '@elementar-ui/components/layout';

@Component({
  selector: 'app-layout-aside-example',
  imports: [
    LayoutBodyComponent,
    LayoutComponent,
    LayoutSidebarComponent,
    LayoutAsideComponent
  ],
  templateUrl: './layout-aside-example.component.html',
  styleUrl: './layout-aside-example.component.scss'
})
export class LayoutAsideExampleComponent {

}
