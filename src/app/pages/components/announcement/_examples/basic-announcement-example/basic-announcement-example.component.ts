import { Component } from '@angular/core';
import { EmrAnnouncementModule } from '@elementar/components';

@Component({
  selector: 'app-basic-announcement-example',
  standalone: true,
  imports: [
    EmrAnnouncementModule
  ],
  templateUrl: './basic-announcement-example.component.html',
  styleUrl: './basic-announcement-example.component.scss'
})
export class BasicAnnouncementExampleComponent {

}
