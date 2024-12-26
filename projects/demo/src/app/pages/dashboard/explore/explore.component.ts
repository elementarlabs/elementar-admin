import { Component } from '@angular/core';
import { DashboardComponent, Widget, WidgetConfig } from '@elementar/components/dashboard';

@Component({
  selector: 'app-explore',
  imports: [
    DashboardComponent
  ],
  templateUrl: './explore.component.html',
  styleUrl: './explore.component.scss'
})
export class ExploreComponent {
  configs: WidgetConfig[] = [
    {
      type: 'explore-widget',
      skeleton: null,
      component: () =>
        import('@elementar/store/widgets/explore-widget/explore-widget.component').then(c => c.ExploreWidgetComponent)
    },
    {
      type: 'heading-widget',
      skeleton: null,
      plain: true,
      component: () =>
        import('@elementar/store/widgets/heading-widget/heading-widget.component').then(c => c.HeadingWidgetComponent)
    },
  ];
  widgets: Widget[] = [
    {
      id: 1,
      type: 'explore-widget',
      columns: 4,
      iconName: 'hub',
      title: 'Community',
      description: 'Connect with other Makers, exchange ideas and tips.',
    },
    {
      id: 2,
      type: 'explore-widget',
      columns: 4,
      iconName: 'school',
      title: 'Academy',
      description: 'Level up your developer skills.',
    },
    {
      id: 3,
      type: 'explore-widget',
      columns: 4,
      iconName: 'question_mark',
      title: 'Help Center',
      description: 'Explore our detailed documentation.',
    },
    {
      id: 4,
      type: 'explore-widget',
      columns: 4,
      iconName: 'group',
      title: 'Mentor Directory',
      description: 'Find the perfect mentor to support your business.',
    },
    {
      id: 4,
      type: 'explore-widget',
      columns: 4,
      iconName: 'menu_book',
      title: 'Blog',
      description: 'Access popular guides & stories about automation.',
    },
    {
      id: 5,
      type: 'explore-widget',
      columns: 4,
      iconName: 'leaderboard',
      title: 'Use Cases',
      description: 'Get inspired by all the ways you can automate.',
    },
    {
      id: 6,
      type: 'heading-widget',
      columns: 12,
      title: 'Blog articles',
      viewMore: {
        name: 'Browse all',
        link: '/pages/content/posts/list',
      }
    }
  ];
}
