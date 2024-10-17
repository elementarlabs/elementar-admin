import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatRipple } from '@angular/material/core';

@Component({
  selector: 'emr-sidebar-go-to-premium',
  standalone: true,
  imports: [
    MatButton,
    MatRipple
  ],
  templateUrl: './go-to-premium.component.html',
  styleUrl: './go-to-premium.component.scss'
})
export class GoToPremiumComponent {

}
