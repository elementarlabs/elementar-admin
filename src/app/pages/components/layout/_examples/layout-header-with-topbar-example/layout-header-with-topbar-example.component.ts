import { Component } from '@angular/core';
import { LayoutBodyComponent } from '@components/layout/layout-body/layout-body.component';
import { LayoutComponent } from '@components/layout/layout/layout.component';
import { LayoutHeaderComponent } from '@components/layout/layout-header/layout-header.component';
import { MatIcon } from '@angular/material/icon';
import { LayoutTopbarComponent } from '@components/layout/layout-topbar/layout-topbar.component';
import { EmrAnnouncementModule } from '@components/announcement/announcement.module';

@Component({
  selector: 'app-layout-header-with-topbar-example',
  standalone: true,
  imports: [
    LayoutBodyComponent,
    LayoutComponent,
    LayoutHeaderComponent,
    LayoutTopbarComponent,
    MatIcon,
    EmrAnnouncementModule
  ],
  templateUrl: './layout-header-with-topbar-example.component.html',
  styleUrl: './layout-header-with-topbar-example.component.scss'
})
export class LayoutHeaderWithTopbarExampleComponent {

}
