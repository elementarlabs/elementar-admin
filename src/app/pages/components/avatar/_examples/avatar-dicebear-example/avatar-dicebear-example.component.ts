import { Component } from '@angular/core';
import { AvatarGroupComponent, DicebearComponent } from '@elementar/components/avatar';

@Component({
  selector: 'app-avatar-dicebear-example',
  standalone: true,
  imports: [
    DicebearComponent,
    AvatarGroupComponent
  ],
  templateUrl: './avatar-dicebear-example.component.html',
  styleUrl: './avatar-dicebear-example.component.scss'
})
export class AvatarDicebearExampleComponent {
}
