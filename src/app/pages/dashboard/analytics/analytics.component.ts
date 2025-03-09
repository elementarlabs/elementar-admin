import { Component } from '@angular/core';
import { DashboardComponent, Widget, WidgetConfig } from '@elementar-ui/components/dashboard';

@Component({
  imports: [
    DashboardComponent
  ],
  templateUrl: './analytics.component.html',
  styleUrl: './analytics.component.scss'
})
export class AnalyticsComponent {
  configs: WidgetConfig[] = [
    {
      type: 'analytics-total-users-widget',
      skeleton: null,
      component: () =>
        import('@store/widgets/analytics-total-users-widget/analytics-total-users-widget.component')
          .then(c => c.AnalyticsTotalUsersWidgetComponent)
    },
    {
      type: 'analytics-active-users-widget',
      skeleton: null,
      component: () =>
        import('@store/widgets/analytics-active-users-widget/analytics-active-users-widget.component')
          .then(c => c.AnalyticsActiveUsersWidgetComponent)
    },
    {
      type: 'analytics-new-signups-widget',
      skeleton: null,
      component: () =>
        import('@store/widgets/analytics-new-signups-widget/analytics-new-signups-widget.component')
          .then(c => c.AnalyticsNewSignupsWidgetComponent)
    },
    {
      type: 'analytics-conversion-rate-widget',
      skeleton: null,
      component: () =>
        import('@store/widgets/analytics-conversion-rate-widget/analytics-conversion-rate-widget.component')
          .then(c => c.AnalyticsConversionRateWidgetComponent)
    },
  ];
  widgets: Widget[] = [
    {
      id: 1,
      type: 'analytics-total-users-widget',
      columns: 3,
    },
    {
      id: 2,
      type: 'analytics-active-users-widget',
      columns: 3,
    },
    {
      id: 3,
      type: 'analytics-new-signups-widget',
      columns: 3,
    },
    {
      id: 4,
      type: 'analytics-conversion-rate-widget',
      columns: 3,
    },
  ];
}
