import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatRipple } from '@angular/material/core';

@Component({
  selector: 'app-membership-plans',
  standalone: true,
  imports: [
    DecimalPipe,
    MatButton,
    MatIcon,
    MatRipple
  ],
  templateUrl: './membership-plans.component.html',
  styleUrl: './membership-plans.component.scss'
})
export class MembershipPlansComponent {
  freeFeatures = [
    'Buy Connects as you need them for $0.15 + Tax each*',
    'Hourly protection to ensure you\'re paid for each hour worked',
    'Fixed-price payments are secured through milestones',
    'Limited reports and functionality'
  ];
  plusFeatures = [
    '100 Connects total per month',
    'Elementar Chat Pro powered by Uma',
    'View competitor bids for any job',
    'Get exclusive access to the Elementar Plus group',
    'Skip the line for Elementar Skills Certifications',
    'Enjoy a 0% service fee when you bring new clients to Elementar',
    'Customize your profile'
  ];
}
