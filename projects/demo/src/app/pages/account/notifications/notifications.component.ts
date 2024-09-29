import { Component } from '@angular/core';
import {
  ErrorColorsExampleComponent
} from '../../customization/colors/_examples/error-colors-example/error-colors-example.component';
import {
  InverseColorsExampleComponent
} from '../../customization/colors/_examples/inverse-colors-example/inverse-colors-example.component';
import {
  NeutralColorsExampleComponent
} from '../../customization/colors/_examples/neutral-colors-example/neutral-colors-example.component';
import {
  NeutralVariantColorsExampleComponent
} from '../../customization/colors/_examples/neutral-variant-colors-example/neutral-variant-colors-example.component';
import {
  OtherColorsExampleComponent
} from '../../customization/colors/_examples/other-colors-example/other-colors-example.component';
import {
  OutlineColorsExampleComponent
} from '../../customization/colors/_examples/outline-colors-example/outline-colors-example.component';
import { PageComponent } from '@demo/meta/page/page.component';
import { PageContentDirective } from '@demo/meta/page/page-content.directive';
import { PlaygroundComponent } from '@demo/meta/playground/playground.component';
import {
  PrimaryColorsExampleComponent
} from '../../customization/colors/_examples/primary-colors-example/primary-colors-example.component';
import {
  SecondaryColorsExampleComponent
} from '../../customization/colors/_examples/secondary-colors-example/secondary-colors-example.component';
import {
  SurfaceColorsExampleComponent
} from '../../customization/colors/_examples/surface-colors-example/surface-colors-example.component';
import {
  TertiaryColorsExampleComponent
} from '../../customization/colors/_examples/tertiary-colors-example/tertiary-colors-example.component';

@Component({
  standalone: true,
  imports: [
    ErrorColorsExampleComponent,
    InverseColorsExampleComponent,
    NeutralColorsExampleComponent,
    NeutralVariantColorsExampleComponent,
    OtherColorsExampleComponent,
    OutlineColorsExampleComponent,
    PageComponent,
    PageContentDirective,
    PlaygroundComponent,
    PrimaryColorsExampleComponent,
    SecondaryColorsExampleComponent,
    SurfaceColorsExampleComponent,
    TertiaryColorsExampleComponent
  ],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.scss'
})
export class NotificationsComponent {

}
