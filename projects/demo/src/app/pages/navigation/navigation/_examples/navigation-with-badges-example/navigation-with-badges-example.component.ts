import { Component } from '@angular/core';
import { EmrNavigationModule, NavigationItemBadgeDirective } from '@elementar/components/navigation';
import { MatIcon } from '@angular/material/icon';

@Component({
    selector: 'app-navigation-with-badges-example',
    imports: [
        EmrNavigationModule,
        MatIcon,
        NavigationItemBadgeDirective
    ],
    templateUrl: './navigation-with-badges-example.component.html',
    styleUrl: './navigation-with-badges-example.component.scss'
})
export class NavigationWithBadgesExampleComponent {

}
