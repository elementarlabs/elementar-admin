import { Component } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import {
  MatDatepickerToggle,
  MatDateRangeInput,
  MatDateRangePicker,
  MatEndDate,
  MatStartDate
} from '@angular/material/datepicker';
import { MatFormField, MatHint, MatLabel, MatSuffix } from '@angular/material/form-field';
import {
  AvgClickRateWidgetComponent,
  AvgOpenRateWidgetComponent, CustomerSatisfactionWidgetComponent, ExchangeWidgetComponent,
  PurchasesByChannelsWidgetComponent,
  SiteVisitorsWidgetComponent, TodaySalesWidgetComponent,
  TotalRevenueWidgetComponent,
  TotalSubscribersWidgetComponent,
  VisitDurationWidgetComponent,
  VisitorInsightsWidgetComponent
} from '@elementar/shared/widgets';
import {
  DashboardCardsSkeletonComponent,
  DashboardChartWidgetSkeletonComponent,
  DashboardStatsWidgetSkeletonComponent
} from '@elementar/shared/skeleton';

@Component({
  selector: 'app-ecommerce',
  standalone: true,
  imports: [
    AvgClickRateWidgetComponent,
    AvgOpenRateWidgetComponent,
    TotalSubscribersWidgetComponent,
    MatIconButton,
    MatIcon,
    MatDateRangeInput,
    MatEndDate,
    MatStartDate,
    MatDateRangePicker,
    MatDatepickerToggle,
    MatFormField,
    MatHint,
    MatLabel,
    MatSuffix,
    TotalRevenueWidgetComponent,
    SiteVisitorsWidgetComponent,
    VisitDurationWidgetComponent,
    PurchasesByChannelsWidgetComponent,
    VisitorInsightsWidgetComponent,
    TodaySalesWidgetComponent,
    ExchangeWidgetComponent,
    DashboardCardsSkeletonComponent,
    DashboardChartWidgetSkeletonComponent,
    DashboardStatsWidgetSkeletonComponent,
    CustomerSatisfactionWidgetComponent
  ],
  templateUrl: './ecommerce.component.html',
  styleUrl: './ecommerce.component.scss'
})
export class EcommerceComponent {

}
