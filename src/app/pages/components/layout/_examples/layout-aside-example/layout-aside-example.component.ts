import { Component } from '@angular/core';
import { LayoutBodyComponent } from '@elementar-ui/components';
import { LayoutComponent } from '@elementar-ui/components';
import { LayoutSidebarComponent } from '@elementar-ui/components';
import { LayoutAsideComponent } from '@elementar-ui/components';

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
