import { Component } from '@angular/core';
import { LayoutBodyComponent } from '@elementar/components';
import { LayoutComponent } from '@elementar/components';
import { LayoutHeaderComponent } from '@elementar/components';
import { LayoutSidebarComponent } from '@elementar/components';
import { LayoutFooterComponent } from '@elementar/components';
import { LayoutTopbarComponent } from '@elementar/components';
import { MatIcon } from '@angular/material/icon';
import { EmrAnnouncementModule } from '@elementar/components';

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
