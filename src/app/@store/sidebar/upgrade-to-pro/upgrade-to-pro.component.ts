import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { AvatarComponent } from '@elementar-ui/components';

@Component({
    selector: 'emr-sidebar-upgrade-to-pro',
    exportAs: 'appSidebarUpgradeToPro',
    imports: [
        MatButton,
        MatIcon,
        AvatarComponent
    ],
    templateUrl: './upgrade-to-pro.component.html',
    styleUrl: './upgrade-to-pro.component.scss'
})
export class UpgradeToProComponent {

}
