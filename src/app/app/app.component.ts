import { Component } from '@angular/core';
import { AnnouncementGlobalComponent } from '@elementar-ui/components/announcement';
import { HeaderComponent } from '../_app/header/header.component';
import { IncidentsContainerComponent } from '@elementar-ui/components/incidents';
import {
  LayoutBodyComponent,
  LayoutComponent,
  LayoutHeaderComponent,
  LayoutSidebarComponent, LayoutTopbarComponent
} from '@elementar-ui/components/layout';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../_app/sidebar/sidebar.component';

@Component({
  selector: 'app-app',
  imports: [
    AnnouncementGlobalComponent,
    HeaderComponent,
    IncidentsContainerComponent,
    LayoutBodyComponent,
    LayoutComponent,
    LayoutHeaderComponent,
    LayoutSidebarComponent,
    LayoutTopbarComponent,
    RouterOutlet,
    SidebarComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
