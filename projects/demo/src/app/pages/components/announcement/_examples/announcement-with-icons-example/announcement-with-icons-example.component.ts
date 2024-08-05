import { Component } from '@angular/core';
import { EmrAnnouncementModule } from '@elementar/components/announcement';

@Component({
  selector: 'app-announcement-with-icons-example',
  standalone: true,
  imports: [
    EmrAnnouncementModule
  ],
  templateUrl: './announcement-with-icons-example.component.html',
  styleUrl: './announcement-with-icons-example.component.scss'
})
export class AnnouncementWithIconsExampleComponent {

}
