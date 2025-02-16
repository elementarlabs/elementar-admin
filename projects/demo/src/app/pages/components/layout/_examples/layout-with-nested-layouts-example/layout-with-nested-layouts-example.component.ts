import { Component } from '@angular/core';
import { LayoutBodyComponent } from '@elementar-ui/components';
import { LayoutComponent } from '@elementar-ui/components';
import { LayoutHeaderComponent } from '@elementar-ui/components';
import { LayoutSidebarComponent } from '@elementar-ui/components';
import { LayoutFooterComponent } from '@elementar-ui/components';
import { LayoutTopbarComponent } from '@elementar-ui/components';
import { AnnouncementComponent } from '@elementar-ui/components';

@Component({
  selector: 'app-layout-with-nested-layouts-example',
  imports: [
    LayoutBodyComponent,
    LayoutComponent,
    LayoutHeaderComponent,
    LayoutSidebarComponent,
    LayoutFooterComponent,
    LayoutTopbarComponent,
    AnnouncementComponent
  ],
  templateUrl: './layout-with-nested-layouts-example.component.html',
  styleUrl: './layout-with-nested-layouts-example.component.scss'
})
export class LayoutWithNestedLayoutsExampleComponent {

}
