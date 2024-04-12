import { Component } from '@angular/core';
import { LayoutBodyComponent } from '@elementar/components';
import { LayoutComponent } from '@elementar/components';
import { LayoutHeaderComponent } from '@elementar/components';
import { MatIcon } from '@angular/material/icon';
import { LayoutTopbarComponent } from '@elementar/components';
import { EmrAnnouncementModule } from '@elementar/components';

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
