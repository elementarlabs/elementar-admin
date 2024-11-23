import {
  Component
} from '@angular/core';

@Component({
    selector: 'emr-navigation-group',
    exportAs: 'emrNavigationGroup',
    templateUrl: './navigation-group.component.html',
    styleUrls: ['./navigation-group.component.scss'],
    host: {
        class: 'emr-navigation-group'
    },
    standalone: false
})
export class NavigationGroupComponent {
}
