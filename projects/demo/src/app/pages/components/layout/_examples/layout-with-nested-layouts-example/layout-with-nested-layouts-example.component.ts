import { Component } from '@angular/core';
import { LayoutBodyComponent } from '@elementar-ui/components/layout';
import { LayoutComponent } from '@elementar-ui/components/layout';
import { LayoutHeaderComponent } from '@elementar-ui/components/layout';
import { LayoutSidebarComponent } from '@elementar-ui/components/layout';
import { LayoutFooterComponent } from '@elementar-ui/components/layout';
import { LayoutTopbarComponent } from '@elementar-ui/components/layout';
import { AnnouncementComponent } from '@elementar-ui/components/announcement';

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
