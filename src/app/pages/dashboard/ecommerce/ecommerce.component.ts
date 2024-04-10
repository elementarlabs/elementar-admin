import { Component } from '@angular/core';
import { AvgClickRateWidgetComponent } from '@shared/widgets/avg-click-rate-widget/avg-click-rate-widget.component';
import { AvgOpenRateWidgetComponent } from '@shared/widgets/avg-open-rate-widget/avg-open-rate-widget.component';
import {
  TotalSubscribersWidgetComponent
} from '@shared/widgets/total-subscribers-widget/total-subscribers-widget.component';
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
import { TotalRevenueWidgetComponent } from '@shared/widgets/total-revenue-widget/total-revenue-widget.component';
import { SiteVisitorsWidgetComponent } from '@shared/widgets/site-visitors-widget/site-visitors-widget.component';
import { VisitDurationWidgetComponent } from '@shared/widgets/visit-duration-widget/visit-duration-widget.component';
import {
  PurchasesByChannelsWidgetComponent
} from '@shared/widgets/purchases-by-channels-widget/purchases-by-channels-widget.component';
import {
  VisitorInsightsWidgetComponent
} from '@shared/widgets/visitor-insights-widget/visitor-insights-widget.component';
import { TodaySalesWidgetComponent } from '@shared/widgets/today-sales-widget/today-sales-widget.component';
import { ExchangeWidgetComponent } from '@shared/widgets/exchange-widget/exchange-widget.component';
import {
  DashboardSkeletonWidgetComponent
} from '@shared/skeleton/dashboard-skeleton-widget/dashboard-skeleton-widget.component';
import {
  DashboardChartSkeletonWidgetComponent
} from '@shared/skeleton/dashboard-chart-skeleton-widget/dashboard-chart-skeleton-widget.component';
import {
  DashboardCardsSkeletonWidgetComponent
} from '@shared/skeleton/dashboard-cards-skeleton-widget/dashboard-cards-skeleton-widget.component';

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
    DashboardSkeletonWidgetComponent,
    DashboardChartSkeletonWidgetComponent,
    DashboardCardsSkeletonWidgetComponent
  ],
  templateUrl: './ecommerce.component.html',
  styleUrl: './ecommerce.component.scss'
})
export class EcommerceComponent {

}
