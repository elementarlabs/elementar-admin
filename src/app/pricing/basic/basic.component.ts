import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';
import { DecimalPipe } from '@angular/common';

interface PricingPlan {
  name: string;
  description: string;
  monthlyPrice: number,
  annualPrice: number,
  features: string[],
}

@Component({
  imports: [
    MatIcon,
    MatButton,
    DecimalPipe
  ],
  templateUrl: './basic.component.html',
  styleUrl: './basic.component.scss'
})
export class BasicComponent {
  paymentType: 'monthly' | 'annual' = 'monthly';
  pricingPlans: PricingPlan[] = [
    {
      name: 'Basic',
      description: 'Start with essential tools to boost your online presence.',
      monthlyPrice: 49,
      annualPrice: 299,
      features: [
        'SEO Strategy & Topic Recommendations',
        'Competitor Analysis to stand out',
        'Built-in Keyword Research',
        'Target latest Google trends',
        'SEO optimized blogs and socials',
        'Technical SEO analysis and Reports',
        'Target 100+ regions and languages',
      ],
    },
    {
      name: 'Professional',
      description: 'Unlock enhanced features and premium content to supercharge your business.',
      monthlyPrice: 199,
      annualPrice: 990,
      features: [
        'Everything in Basic plan',
        'Get 25 premium blogs',
        'Index upto 1000 pages',
        'Premium support',
        'Local SEO',
        'SEO Agent',
      ],
    },
    {
      name: 'Premium',
      description: 'Ultimate customization and dedicated support for enterprises.',
      monthlyPrice: 1499,
      annualPrice: 5990,
      features: [
        'Everything in Professional plan',
        'Get Unlimited premium blogs',
        'Add your own AI Model key',
        'Premium support & training sessions',
      ],
    },
  ];

  payMonthly(): void {
    this.paymentType = 'monthly';
  }

  payAnnual(): void {
    this.paymentType = 'annual';
  }
}
