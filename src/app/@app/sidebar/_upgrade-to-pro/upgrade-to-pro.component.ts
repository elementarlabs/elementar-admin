import { Component } from '@angular/core';
import { EmrAvatarModule } from '@elementar/components';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-sidebar-upgrade-to-pro',
  exportAs: 'appSidebarUpgradeToPro',
  standalone: true,
  imports: [
    EmrAvatarModule,
    MatButton,
    MatIcon
  ],
  templateUrl: './upgrade-to-pro.component.html',
  styleUrl: './upgrade-to-pro.component.scss'
})
export class UpgradeToProComponent {

}
