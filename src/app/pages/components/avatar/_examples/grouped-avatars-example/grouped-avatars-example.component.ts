import { Component } from '@angular/core';
import { AvatarComponent, AvatarGroupComponent } from '@elementar-ui/components/avatar';

@Component({
  selector: 'app-grouped-avatars-example',
  templateUrl: './grouped-avatars-example.component.html',
  imports: [
    AvatarComponent,
    AvatarGroupComponent
  ],
  styleUrl: './grouped-avatars-example.component.scss'
})
export class GroupedAvatarsExampleComponent {

}
