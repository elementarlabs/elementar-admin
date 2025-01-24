import { Component } from '@angular/core';
import { PlaygroundComponent } from '@demo/meta/playground/playground.component';
import {
  BasicAnnouncementExampleComponent
} from '../_examples/basic-announcement-example/basic-announcement-example.component';
import {
  AnnouncementWithIconsExampleComponent
} from '../_examples/announcement-with-icons-example/announcement-with-icons-example.component';
import { PageComponent } from '@demo/meta/page/page.component';
import { PageContentDirective } from '@demo/meta/page/page-content.directive';
import {
  ShowHideAnnouncementDynamicallyComponent
} from '../_examples/show-hide-announcement-dynamically/show-hide-announcement-dynamically.component';
import { MatTab, MatTabGroup } from '@angular/material/tabs';

@Component({
  imports: [
    PlaygroundComponent,
    BasicAnnouncementExampleComponent,
    AnnouncementWithIconsExampleComponent,
    PageComponent,
    PageContentDirective,
    ShowHideAnnouncementDynamicallyComponent,
    MatTab,
    MatTabGroup
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
