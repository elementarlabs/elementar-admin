import { Component } from '@angular/core';
import {
  BasicDividerExampleComponent
} from '../../divider/_examples/basic-divider-example/basic-divider-example.component';
import { PlaygroundComponent } from '@meta/playground/playground.component';
import { BasicMenuExampleComponent } from '../_examples/basic-menu-example/basic-menu-example.component';
import { MenuWithIconsExampleComponent } from '../_examples/menu-with-icons-example/menu-with-icons-example.component';
import { NestedMenuExampleComponent } from '../_examples/nested-menu-example/nested-menu-example.component';
import {
  MenuPositioningExampleComponent
} from '../_examples/menu-positioning-example/menu-positioning-example.component';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [
    BasicDividerExampleComponent,
    PlaygroundComponent,
    BasicMenuExampleComponent,
    MenuWithIconsExampleComponent,
    NestedMenuExampleComponent,
    MenuPositioningExampleComponent
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
