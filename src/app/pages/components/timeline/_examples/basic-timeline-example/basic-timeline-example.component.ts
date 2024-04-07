import { Component } from '@angular/core';
import { EmrTimelineModule } from '@components/timeline/timeline.module';
import { EmrAvatarModule } from '@components/avatar';

@Component({
  selector: 'app-basic-timeline-example',
  standalone: true,
  imports: [
    EmrTimelineModule,
    EmrAvatarModule
  ],
  templateUrl: './basic-timeline-example.component.html',
  styleUrl: './basic-timeline-example.component.scss'
})
export class BasicTimelineExampleComponent {

}
