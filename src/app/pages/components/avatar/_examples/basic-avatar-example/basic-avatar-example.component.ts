import { Component } from '@angular/core';
import { EmrAvatarModule } from '@elementar/components/avatar';

@Component({
  selector: 'app-basic-avatar-example',
  standalone: true,
  imports: [
    EmrAvatarModule
  ],
  templateUrl: './basic-avatar-example.component.html',
  styleUrl: './basic-avatar-example.component.scss'
})
export class BasicAvatarExampleComponent {

}
