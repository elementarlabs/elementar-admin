import { Component } from '@angular/core';
import { PlaygroundComponent } from '@demo/meta/playground/playground.component';
import {
  BasicPasswordStrengthExampleComponent
} from '../_examples/basic-password-strength-example/basic-password-strength-example.component';
import {
  PasswordStrengthInfoExampleComponent
} from '../_examples/password-strength-info-example/password-strength-info-example.component';
import {
  PasswordToggleVisibilityExampleComponent
} from '../_examples/password-toggle-visibility-example/password-toggle-visibility-example.component';
import { PageComponent } from '@demo/meta/page/page.component';
import { PageContentDirective } from '@demo/meta/page/page-content.directive';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [
    PlaygroundComponent,
    BasicPasswordStrengthExampleComponent,
    PasswordStrengthInfoExampleComponent,
    PasswordToggleVisibilityExampleComponent,
    PageComponent,
    PageContentDirective
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
