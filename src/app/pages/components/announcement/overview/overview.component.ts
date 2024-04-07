import { Component } from '@angular/core';
import { PlaygroundComponent } from '@meta/playground/playground.component';
import {
  BasicAnnouncementExampleComponent
} from '../_examples/basic-announcement-example/basic-announcement-example.component';
import {
  AnnouncementWithIconsExampleComponent
} from '../_examples/announcement-with-icons-example/announcement-with-icons-example.component';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [
    PlaygroundComponent,
    BasicAnnouncementExampleComponent,
    AnnouncementWithIconsExampleComponent
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
