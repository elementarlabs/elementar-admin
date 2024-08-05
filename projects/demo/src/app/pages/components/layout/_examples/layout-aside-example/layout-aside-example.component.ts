import { Component } from '@angular/core';
import { LayoutBodyComponent } from '@elementar/components/layout';
import { LayoutComponent } from '@elementar/components/layout';
import { LayoutSidebarComponent } from '@elementar/components/layout';
import { LayoutAsideComponent } from '@elementar/components/layout';

@Component({
  selector: 'app-layout-aside-example',
  standalone: true,
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
