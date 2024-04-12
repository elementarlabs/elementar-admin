import {
  Component, Input, numberAttribute
} from '@angular/core';

@Component({
  selector: 'emr-avatar-group',
  exportAs: 'emrAvatarGroup',
  styleUrls: ['./avatar-group.component.scss'],
  templateUrl: './avatar-group.component.html',
  host: {
    class: 'emr-avatar-group'
  }
})
export class AvatarGroupComponent {
}
