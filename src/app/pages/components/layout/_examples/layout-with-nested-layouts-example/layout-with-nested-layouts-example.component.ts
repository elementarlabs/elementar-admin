import { Component } from '@angular/core';
import { LayoutBodyComponent } from '@components/layout/layout-body/layout-body.component';
import { LayoutComponent } from '@components/layout/layout/layout.component';
import { LayoutHeaderComponent } from '@components/layout/layout-header/layout-header.component';
import { LayoutSidebarComponent } from '@components/layout/layout-sidebar/layout-sidebar.component';
import { LayoutFooterComponent } from '@components/layout/layout-footer/layout-footer.component';
import { LayoutTopbarComponent } from '@components/layout/layout-topbar/layout-topbar.component';
import { MatIcon } from '@angular/material/icon';
import { EmrAnnouncementModule } from '@components/announcement/announcement.module';

@Component({
  selector: 'app-layout-with-nested-layouts-example',
  standalone: true,
  imports: [
    LayoutBodyComponent,
    LayoutComponent,
    LayoutHeaderComponent,
    LayoutSidebarComponent,
    LayoutFooterComponent,
    LayoutTopbarComponent,
    MatIcon,
    EmrAnnouncementModule
  ],
  templateUrl: './layout-with-nested-layouts-example.component.html',
  styleUrl: './layout-with-nested-layouts-example.component.scss'
})
export class LayoutWithNestedLayoutsExampleComponent {

}
