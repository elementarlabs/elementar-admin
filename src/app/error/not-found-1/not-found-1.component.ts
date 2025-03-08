import { Component } from '@angular/core';
import { LogoComponent } from '@elementar-ui/components/logo';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-not-found-1',
  imports: [
    LogoComponent,
    MatButton,
    RouterLink,
    MatIcon
  ],
  templateUrl: './not-found-1.component.html',
  styleUrl: './not-found-1.component.scss'
})
export class NotFound1Component {

}
