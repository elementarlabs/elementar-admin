import { Component } from '@angular/core';
import { LayoutBodyComponent } from '@elementar-ui/components/layout';
import { LayoutComponent } from '@elementar-ui/components/layout';
import { LayoutHeaderComponent } from '@elementar-ui/components/layout';
import { LayoutTopbarComponent } from '@elementar-ui/components/layout';
import { AnnouncementComponent } from '@elementar-ui/components/announcement';

@Component({
  selector: 'app-layout-header-with-topbar-example',
  imports: [
    LayoutBodyComponent,
    LayoutComponent,
    LayoutHeaderComponent,
    LayoutTopbarComponent,
    AnnouncementComponent
  ],
  templateUrl: './layout-header-with-topbar-example.component.html',
  styleUrl: './layout-header-with-topbar-example.component.scss'
})
export class LayoutHeaderWithTopbarExampleComponent {

}
