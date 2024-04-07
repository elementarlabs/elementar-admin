import { Component, Input, OnInit } from '@angular/core';
import { animate, animateChild, keyframes, query, stagger, style, transition, trigger, useAnimation} from '@angular/animations';
import { shake } from '../animations/index';
import { PasswordStrengthComponent } from '@components/password-strength/password-strength/password-strength.component';

@Component({
  selector: 'emr-password-strength-info',
  exportAs: 'emrPasswordStrengthInfo',
  templateUrl: './password-strength-info.component.html',
  styleUrls: ['./password-strength-info.component.scss'],
  animations: [
    trigger('positiveState', [
      transition(':enter', [
        style({'backface-visibility': 'visible'}),
        animate(
          '{{ timing }}s {{ delay }}s ease-in',
          keyframes([
            style({
              opacity: 0,
              transform:
                'perspective(400px) rotate3d({{ rotateX }}, {{ rotateY }}, 0, 90deg)',
              offset: 0,
            }),
            style({
              opacity: 1,
              transform:
                'perspective(400px) rotate3d({{ rotateX }}, {{ rotateY }}, 0, -20deg)',
              offset: 0.4,
            }),
            style({
              transform:
                'perspective(400px) rotate3d({{ rotateX }}, {{ rotateY }}, 0, 10deg)',
              offset: 0.6,
            }),
            style({
              transform:
                'perspective(400px) rotate3d({{ rotateX }}, {{ rotateY }}, 0, -5deg)',
              offset: 0.8,
            }),
            style({
              transform: 'perspective(400px) rotate3d(0, 0, 0, 0)',
              offset: 1,
            }),
          ])
        ),
      ], {params: {timing: 1, delay: 0, rotateX: 1, rotateY: 0}}),
    ]),
    trigger('negativeState', [
      transition(':enter', useAnimation(shake)),
    ]),
  ],
})
export class PasswordStrengthInfoComponent implements OnInit {
  @Input()
  passwordComponent: PasswordStrengthComponent;

  @Input()
  enableScoreInfo = false;

  @Input()
  lowerCaseCriteriaMessage = 'contains at least one lower character';

  @Input()
  upperCaseCriteriaMessage = 'contains at least one upper character';

  @Input()
  digitsCriteriaMessage = 'contains at least one digit character';

  @Input()
  specialCharsCriteriaMessage = 'contains at least one special character';

  @Input()
  customCharsCriteriaMessage = 'contains at least one custom character';

  @Input()
  minCharsCriteriaMessage: string;

  @Input()
  matIconDone = 'done';

  @Input()
  matIconError = 'error';

  ngOnInit(): void {
    if (!this.minCharsCriteriaMessage) {
      this.minCharsCriteriaMessage = `contains at least ${this.passwordComponent.min} characters`
    }
  }
}
