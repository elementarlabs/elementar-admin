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
        import('../../_store/widgets/analytics-total-users-widget/analytics-total-users-widget.component')
          .then(c => c.AnalyticsTotalUsersWidgetComponent)
    },
    {
      type: 'analytics-active-users-widget',
      skeleton: null,
      component: () =>
        import('../../_store/widgets/analytics-active-users-widget/analytics-active-users-widget.component')
          .then(c => c.AnalyticsActiveUsersWidgetComponent)
    },
    {
      type: 'analytics-new-signups-widget',
      skeleton: null,
      component: () =>
        import('../../_store/widgets/analytics-new-signups-widget/analytics-new-signups-widget.component')
          .then(c => c.AnalyticsNewSignupsWidgetComponent)
    },
    {
      type: 'analytics-conversion-rate-widget',
      skeleton: null,
      component: () =>
        import('../../_store/widgets/analytics-conversion-rate-widget/analytics-conversion-rate-widget.component')
          .then(c => c.AnalyticsConversionRateWidgetComponent)
    },
    {
      type: 'analytics-total-projects-widget',
      skeleton: null,
      component: () =>
        import('../../_store/widgets/analytics-total-projects-widget/analytics-total-projects-widget.component')
          .then(c => c.AnalyticsTotalProjectsWidgetComponent)
    },
    {
      type: 'analytics-ended-projects-widget',
      skeleton: null,
      component: () =>
        import('../../_store/widgets/analytics-ended-projects-widget/analytics-ended-projects-widget.component')
          .then(c => c.AnalyticsEndedProjectsWidgetComponent)
    },
    {
      type: 'analytics-running-projects-widget',
      skeleton: null,
      component: () =>
        import('../../_store/widgets/analytics-running-projects-widget/analytics-running-projects-widget.component')
          .then(c => c.AnalyticsRunningProjectsWidgetComponent)
    },
    {
      type: 'analytics-pending-projects-widget',
      skeleton: null,
      component: () =>
        import('../../_store/widgets/analytics-pending-projects-widget/analytics-pending-projects-widget.component')
          .then(c => c.AnalyticsPendingProjectsWidgetComponent)
    },
    {
      type: 'analytics-followers-widget',
      skeleton: null,
      component: () =>
        import('../../_store/widgets/analytics-followers-widget/analytics-followers-widget.component')
          .then(c => c.AnalyticsFollowersWidgetComponent)
    },
    {
      type: 'analytics-likes-widget',
      skeleton: null,
      component: () =>
        import('../../_store/widgets/analytics-likes-widget/analytics-likes-widget.component')
          .then(c => c.AnalyticsLikesWidgetComponent)
    },
    {
      type: 'analytics-comments-widget',
      skeleton: null,
      component: () =>
        import('../../_store/widgets/analytics-comments-widget/analytics-comments-widget.component')
          .then(c => c.AnalyticsCommentsWidgetComponent)
    },
    {
      type: 'analytics-avg-order-value-widget',
      skeleton: null,
      component: () =>
        import('../../_store/widgets/analytics-avg-order-value-widget/analytics-avg-order-value-widget.component')
          .then(c => c.AnalyticsAvgOrderValueWidgetComponent)
    },
    {
      type: 'analytics-total-orders-widget',
      skeleton: null,
      component: () =>
        import('../../_store/widgets/analytics-total-orders-widget/analytics-total-orders-widget.component')
          .then(c => c.AnalyticsTotalOrdersWidgetComponent)
    },
    {
      type: 'analytics-gross-revenue-widget',
      skeleton: null,
      component: () =>
        import('../../_store/widgets/analytics-gross-revenue-widget/analytics-gross-revenue-widget.component')
          .then(c => c.AnalyticsGrossRevenueWidgetComponent)
    },
  ];
  widgets: Widget[] = [
    {
      id: 12,
      type: 'analytics-gross-revenue-widget',
      columns: 4,
    },
    {
      id: 13,
      type: 'analytics-avg-order-value-widget',
      columns: 4,
    },
    {
      id: 14,
      type: 'analytics-total-orders-widget',
      columns: 4,
    },
    {
      id: 9,
      type: 'analytics-followers-widget',
      columns: 4,
    },
    {
      id: 10,
      type: 'analytics-likes-widget',
      columns: 4,
    },
    {
      id: 11,
      type: 'analytics-comments-widget',
      columns: 4,
    },
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
    {
      id: 5,
      type: 'analytics-total-projects-widget',
      columns: 3,
    },
    {
      id: 6,
      type: 'analytics-ended-projects-widget',
      columns: 3,
    },
    {
      id: 7,
      type: 'analytics-running-projects-widget',
      columns: 3,
    },
    {
      id: 8,
      type: 'analytics-pending-projects-widget',
      columns: 3,
    },
  ];
}
