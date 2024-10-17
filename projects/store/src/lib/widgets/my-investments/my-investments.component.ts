import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatRipple } from '@angular/material/core';
import { MatTooltip } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import { MatList, MatListItem } from '@angular/material/list';

@Component({
  selector: 'emr-my-investments',
  standalone: true,
  imports: [
    MatIcon,
    MatRipple,
    MatTooltip,
    RouterLink,
    MatListItem,
    MatList
  ],
  templateUrl: './my-investments.component.html',
  styleUrl: './my-investments.component.scss'
})
export class MyInvestmentsComponent {

}
