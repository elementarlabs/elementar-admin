import { Component } from '@angular/core';
import { PlaygroundComponent } from '@meta/playground/playground.component';
import { BasicAvatarExampleComponent } from '../_examples/basic-avatar-example/basic-avatar-example.component';
import { AvatarSizesExampleComponent } from '../_examples/avatar-sizes-example/avatar-sizes-example.component';
import {
  AvatarWithImagesExampleComponent
} from '../_examples/avatar-with-images-example/avatar-with-images-example.component';
import {
  AvatarWithIconsExampleComponent
} from '../_examples/avatar-with-icons-example/avatar-with-icons-example.component';
import { GroupedAvatarsExampleComponent } from '../_examples/grouped-avatars-example/grouped-avatars-example.component';
import {
  GroupedAndTotalAvatarsExampleComponent
} from '../_examples/grouped-and-total-avatars-example/grouped-and-total-avatars-example.component';
import {
  AvatarPresenceIndicatorExampleComponent
} from '../_examples/avatar-presence-indicator-example/avatar-presence-indicator-example.component';
import { PageComponent } from '@meta/page/page.component';
import { PageContentDirective } from '@meta/page/page-content.directive';
import {
  AvatarAutomaticColorExampleComponent
} from '../_examples/avatar-automatic-color-example/avatar-automatic-color-example.component';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [
    PlaygroundComponent,
    BasicAvatarExampleComponent,
    AvatarSizesExampleComponent,
    AvatarWithImagesExampleComponent,
    AvatarWithIconsExampleComponent,
    GroupedAvatarsExampleComponent,
    GroupedAndTotalAvatarsExampleComponent,
    AvatarPresenceIndicatorExampleComponent,
    PageComponent,
    PageContentDirective,
    AvatarAutomaticColorExampleComponent
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
