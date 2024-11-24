import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  LayoutBodyComponent,
  LayoutComponent,
  LayoutHeaderComponent,
  LayoutSidebarComponent
} from '@elementar/components/layout';
import { EmrPanelModule } from '@elementar/components/panel';
import { EmrTabPanelModule } from '@elementar/components/tab-panel';
import { SidebarComponent } from '../@app/sidebar/sidebar.component';
import { HeaderComponent } from '../@app/header/header.component';

@Component({
  selector: 'app-common',
  imports: [
    RouterOutlet,
    HeaderComponent,
    LayoutBodyComponent,
    LayoutComponent,
    LayoutHeaderComponent,
    LayoutSidebarComponent,
    SidebarComponent,
    EmrPanelModule,
    EmrTabPanelModule
  ],
  templateUrl: './common.component.html',
  styleUrl: './common.component.scss'
})
export class CommonComponent {

}
