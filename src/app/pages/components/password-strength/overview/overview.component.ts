import { Component } from '@angular/core';
import { PlaygroundComponent } from '@meta/playground/playground.component';
import {
  BasicPasswordStrengthExampleComponent
} from '../_examples/basic-password-strength-example/basic-password-strength-example.component';
import {
  PasswordStrengthInfoExampleComponent
} from '../_examples/password-strength-info-example/password-strength-info-example.component';
import {
  PasswordToggleVisibilityExampleComponent
} from '../_examples/password-toggle-visibility-example/password-toggle-visibility-example.component';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [
    PlaygroundComponent,
    BasicPasswordStrengthExampleComponent,
    PasswordStrengthInfoExampleComponent,
    PasswordToggleVisibilityExampleComponent
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
