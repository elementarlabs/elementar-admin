import { Component } from '@angular/core';
import { LayoutBodyComponent } from '@elementar-ui/components';
import { LayoutComponent } from '@elementar-ui/components';
import { LayoutHeaderComponent } from '@elementar-ui/components';
import { LayoutTopbarComponent } from '@elementar-ui/components';
import { AnnouncementComponent } from '@elementar-ui/components';

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
