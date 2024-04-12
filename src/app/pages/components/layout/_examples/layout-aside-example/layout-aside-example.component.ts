import { Component } from '@angular/core';
import { LayoutBodyComponent } from '@elementar/components';
import { LayoutComponent } from '@elementar/components';
import { LayoutSidebarComponent } from '@elementar/components';
import { LayoutAsideComponent } from '@elementar/components';

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
