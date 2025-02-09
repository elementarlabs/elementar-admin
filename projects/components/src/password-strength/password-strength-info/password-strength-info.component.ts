import { booleanAttribute, Component, input } from '@angular/core';
import { animate, keyframes, style, transition, trigger, useAnimation} from '@angular/animations';
import { shake } from '../animations';
import { PasswordStrengthComponent } from '../password-strength/password-strength.component';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'emr-password-strength-info',
  exportAs: 'emrPasswordStrengthInfo',
  imports: [
    MatIcon
  ],
  templateUrl: './password-strength-info.component.html',
  styleUrl: './password-strength-info.component.scss',
  animations: [
    trigger('positiveState', [
      transition(':enter', [
        style({ 'backface-visibility': 'visible' }),
        animate('{{ timing }}s {{ delay }}s ease-in', keyframes([
          style({
            opacity: 0,
            transform: 'perspective(400px) rotate3d({{ rotateX }}, {{ rotateY }}, 0, 90deg)',
            offset: 0,
          }),
          style({
            opacity: 1,
            transform: 'perspective(400px) rotate3d({{ rotateX }}, {{ rotateY }}, 0, -20deg)',
            offset: 0.4,
          }),
          style({
            transform: 'perspective(400px) rotate3d({{ rotateX }}, {{ rotateY }}, 0, 10deg)',
            offset: 0.6,
          }),
          style({
            transform: 'perspective(400px) rotate3d({{ rotateX }}, {{ rotateY }}, 0, -5deg)',
            offset: 0.8,
          }),
          style({
            transform: 'perspective(400px) rotate3d(0, 0, 0, 0)',
            offset: 1,
          }),
        ])),
      ], { params: { timing: 1, delay: 0, rotateX: 1, rotateY: 0 } }),
    ]),
    trigger('negativeState', [
      transition(':enter', useAnimation(shake)),
    ]),
  ],
  host: {
    'class': 'emr-password-strength-info',
  }
})
export class PasswordStrengthInfoComponent {
  passwordComponent = input.required<PasswordStrengthComponent>();
  enableScoreInfo = input(false, {
    transform: booleanAttribute
  });
  lowerCaseCriteriaMessage = input('contains at least one lower character');
  upperCaseCriteriaMessage = input('contains at least one upper character');
  digitsCriteriaMessage = input('contains at least one digit character');
  specialCharsCriteriaMessage = input('contains at least one special character');
  customCharsCriteriaMessage = input('contains at least one custom character');
  minCharsCriteriaMessage = input(`contains at least minimum characters`);
  matIconDone = input('done');
  matIconError = input('error');
}
