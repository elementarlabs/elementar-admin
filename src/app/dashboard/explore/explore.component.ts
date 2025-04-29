import { Component } from '@angular/core';
import { DashboardComponent, Widget, WidgetConfig } from '@elementar-ui/components/dashboard';

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
        import('../../_store/widgets/explore-widget/explore-widget.component').then(c => c.ExploreWidgetComponent)
    },
    {
      type: 'heading-widget',
      skeleton: null,
      plain: true,
      component: () =>
        import('../../_store/widgets/heading-widget/heading-widget.component').then(c => c.HeadingWidgetComponent)
    },
    {
      type: 'action-required-widget',
      skeleton: null,
      plain: true,
      component: () =>
        import('../../_store/widgets/action-required-widget/action-required-widget.component').then(c => c.ActionRequiredWidgetComponent)
    },
    {
      type: 'article-snippet-widget',
      skeleton: null,
      component: () =>
        import('../../_store/widgets/article-snippet-widget/article-snippet-widget.component').then(c => c.ArticleSnippetWidgetComponent)
    },
  ];
  widgets: Widget[] = [
    {
      id: 20,
      type: 'action-required-widget',
      columns: 12,
      description: 'Please provide your company details to access our services seamlessly, whether forming a new company or adding existing information.',
      buttonText: 'Fix the problem',
    },
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
    },
    {
      id: 7,
      type: 'article-snippet-widget',
      columns: 4,
      title: 'The Must-Have SEO Checklist for Developers For 2025',
      imagePreviewUrl: 'assets/widgets/article-snippet-preview.png',
      publishedAt: new Date(),
    },
    {
      id: 8,
      type: 'article-snippet-widget',
      columns: 4,
      title: 'Build a Distributed Task Scheduler Using RabbitMQ and Redis',
      imagePreviewUrl: 'assets/widgets/article-snippet-preview.png',
      publishedAt: new Date(),
    },
    {
      id: 9,
      type: 'article-snippet-widget',
      columns: 4,
      title: 'How to retrieve values from all types of HTML Inputs in JavaScript',
      imagePreviewUrl: 'assets/widgets/article-snippet-preview.png',
      publishedAt: new Date(),
    },
    {
      id: 10,
      type: 'article-snippet-widget',
      columns: 4,
      title: 'Mastering Async/Await and DOM Manipulation',
      imagePreviewUrl: 'assets/widgets/article-snippet-preview.png',
      publishedAt: new Date(),
    },
    {
      id: 11,
      type: 'article-snippet-widget',
      columns: 4,
      title: '20 senior Angular developer interview questions and answers',
      imagePreviewUrl: 'assets/widgets/article-snippet-preview.png',
      publishedAt: new Date(),
    },
    {
      id: 12,
      type: 'article-snippet-widget',
      columns: 4,
      title: 'Master clean code principles and best practices',
      imagePreviewUrl: 'assets/widgets/article-snippet-preview.png',
      publishedAt: new Date(),
    },
  ];
}
