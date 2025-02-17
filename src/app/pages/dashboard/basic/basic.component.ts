import { Component } from '@angular/core';
import { DashboardComponent, Widget, WidgetConfig } from '@elementar-ui/components';

@Component({
  imports: [
    DashboardComponent
  ],
  templateUrl: './basic.component.html',
  styleUrl: './basic.component.scss'
})
export class BasicComponent {
  configs: WidgetConfig[] = [
    {
      type: 'total-subscribers-widget',
      skeleton: null,
      component: () =>
        import('@store/widgets/total-subscribers-widget/total-subscribers-widget.component').then(c => c.TotalSubscribersWidgetComponent)
    },
    {
      type: 'avg-open-rate-widget',
      skeleton: null,
      component: () =>
        import('@store/widgets/avg-open-rate-widget/avg-open-rate-widget.component').then(c => c.AvgOpenRateWidgetComponent)
    },
    {
      type: 'avg-click-rate-widget',
      skeleton: null,
      component: () =>
        import('@store/widgets/avg-click-rate-widget/avg-click-rate-widget.component').then(c => c.AvgClickRateWidgetComponent)
    },
    {
      type: 'unique-visitors-widget',
      skeleton: null,
      component: () =>
        import('@store/widgets/unique-visitors-widget/unique-visitors-widget.component').then(c => c.UniqueVisitorsWidgetComponent)
    },
    {
      type: 'total-tasks-widget',
      skeleton: null,
      component: () =>
        import('@store/widgets/total-tasks-widget/total-tasks-widget.component').then(c => c.TotalTasksWidgetComponent)
    },
    {
      type: 'total-projects-widget',
      skeleton: null,
      component: () =>
        import('@store/widgets/total-projects-widget/total-projects-widget.component').then(c => c.TotalProjectsWidgetComponent)
    },
    {
      type: 'events-widget',
      skeleton: null,
      component: () =>
        import('@store/widgets/events-widget/events-widget.component').then(c => c.EventsWidgetComponent)
    },
    {
      type: 'team-widget',
      skeleton: null,
      component: () =>
        import('@store/widgets/team-widget/team-widget.component').then(c => c.TeamWidgetComponent)
    },
    {
      type: 'tasks-in-progress-widget',
      component: () =>
        import('@store/widgets/tasks-in-progress-widget/tasks-in-progress-widget.component').then(c => c.TasksInProgressWidgetComponent)
    },
    {
      type: 'todos-widget',
      skeleton: null,
      component: () =>
        import('@store/widgets/todos-widget/todos-widget.component').then(c => c.TodosWidgetComponent)
    }
  ];
  widgets: Widget[] = [
    {
      id: 1,
      type: 'total-subscribers-widget',
      columns: 3
    },
    {
      id: 2,
      type: 'avg-open-rate-widget',
      columns: 3
    },
    {
      id: 3,
      type: 'avg-click-rate-widget',
      columns: 3
    },
    {
      id: 4,
      type: 'unique-visitors-widget',
      columns: 3
    },
    {
      id: 5,
      type: 'total-tasks-widget',
      columns: 3,
      skeleton: {
        minHeight: '260px',
      }
    },
    {
      id: 6,
      type: 'total-projects-widget',
      columns: 3,
      skeleton: {
        minHeight: '260px',
      }
    },
    {
      id: 7,
      type: 'events-widget',
      columns: 3,
      skeleton: {
        minHeight: '260px',
      }
    },
    {
      id: 8,
      type: 'team-widget',
      columns: 3,
      skeleton: {
        minHeight: '260px',
      }
    },
    {
      id: 9,
      type: 'tasks-in-progress-widget',
      columns: 6,
      skeleton: {
        minHeight: '400px',
      }
    },
    {
      id: 10,
      type: 'todos-widget',
      columns: 6,
      skeleton: {
        minHeight: '400px',
      }
    }
  ];
}
