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
    {
      type: 'analytics-total-projects-widget',
      skeleton: null,
      component: () =>
        import('@store/widgets/analytics-total-projects-widget/analytics-total-projects-widget.component')
          .then(c => c.AnalyticsTotalProjectsWidgetComponent)
    },
    {
      type: 'analytics-ended-projects-widget',
      skeleton: null,
      component: () =>
        import('@store/widgets/analytics-ended-projects-widget/analytics-ended-projects-widget.component')
          .then(c => c.AnalyticsEndedProjectsWidgetComponent)
    },
    {
      type: 'analytics-running-projects-widget',
      skeleton: null,
      component: () =>
        import('@store/widgets/analytics-running-projects-widget/analytics-running-projects-widget.component')
          .then(c => c.AnalyticsRunningProjectsWidgetComponent)
    },
    {
      type: 'analytics-pending-projects-widget',
      skeleton: null,
      component: () =>
        import('@store/widgets/analytics-pending-projects-widget/analytics-pending-projects-widget.component')
          .then(c => c.AnalyticsPendingProjectsWidgetComponent)
    },
    {
      type: 'analytics-followers-widget',
      skeleton: null,
      component: () =>
        import('@store/widgets/analytics-followers-widget/analytics-followers-widget.component')
          .then(c => c.AnalyticsFollowersWidgetComponent)
    },
    {
      type: 'analytics-likes-widget',
      skeleton: null,
      component: () =>
        import('@store/widgets/analytics-likes-widget/analytics-likes-widget.component')
          .then(c => c.AnalyticsLikesWidgetComponent)
    },
    {
      type: 'analytics-comments-widget',
      skeleton: null,
      component: () =>
        import('@store/widgets/analytics-comments-widget/analytics-comments-widget.component')
          .then(c => c.AnalyticsCommentsWidgetComponent)
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
  ];
}
