import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { MatFormField, MatLabel, MatSuffix } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { HorizontalDividerComponent } from '@elementar-ui/components/divider';
import { LogoComponent } from '@elementar-ui/components/logo';

@Component({
  selector: 'app-signin',
  imports: [
    RouterLink,
    MatButton,
    MatFormField,
    MatLabel,
    MatInput,
    MatSuffix,
    HorizontalDividerComponent,
    LogoComponent
  ],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent {

}
