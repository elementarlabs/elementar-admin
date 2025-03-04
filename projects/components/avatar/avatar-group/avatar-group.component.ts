import { Component } from '@angular/core';

@Component({
  selector: 'emr-avatar-group',
  exportAs: 'emrAvatarGroup',
  standalone: true,
  templateUrl: './avatar-group.component.html',
  styleUrl: './avatar-group.component.scss',
  host: {
    'class': 'emr-avatar-group'
  }
})
export class AvatarGroupComponent {
}
