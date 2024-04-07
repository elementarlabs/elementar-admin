import { Component } from '@angular/core';
import { LayoutBodyComponent } from '@components/layout/layout-body/layout-body.component';
import { LayoutComponent } from '@components/layout/layout/layout.component';
import { LayoutSidebarComponent } from '@components/layout/layout-sidebar/layout-sidebar.component';
import { LayoutAsideComponent } from '@components/layout/layout-aside/layout-aside.component';

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
