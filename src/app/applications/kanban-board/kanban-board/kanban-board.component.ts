import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatButton, MatIconButton } from '@angular/material/button';
import { KanbanColumn, KanbanItem, KanbanItemDefDirective, KanbanBoardComponent as EmrKanbanBoardComponent } from '@elementar-ui/components/kanban-board';
import { PanelBodyComponent, PanelComponent, PanelHeaderComponent } from '@elementar-ui/components/panel';
import {
  AvatarComponent,
  AvatarGroupComponent,
  AvatarTotalComponent,
  DicebearComponent
} from '@elementar-ui/components/avatar';
import { SegmentedButtonComponent, SegmentedComponent } from '@elementar-ui/components/segmented';

interface TaskPriority {
  id: any;
  name: string;
  color: string;
  type: string;
}

interface TaskItem extends KanbanItem {
  reporter: {
    id: any;
    name: string;
  },
  assignee: {
    id: any;
    name: string;
  },
  priority: TaskPriority
}

@Component({
  selector: 'app-kanban-board',
  imports: [
    MatIcon,
    MatIconButton,
    PanelComponent,
    PanelHeaderComponent,
    PanelBodyComponent,
    AvatarComponent,
    AvatarGroupComponent,
    AvatarTotalComponent,
    MatButton,
    SegmentedButtonComponent,
    SegmentedComponent,
    KanbanItemDefDirective,
    DicebearComponent,
    EmrKanbanBoardComponent
  ],
  templateUrl: './kanban-board.component.html',
  styleUrl: './kanban-board.component.scss'
})
export class KanbanBoardComponent {
  priorities: TaskPriority[] = [
    {
      id: 1,
      name: 'Low',
      color: '#e2b203',
      type: 'low',
    },
    {
      id: 1,
      name: 'Medium',
      type: 'medium',
      color: '#22a06b',
    },
    {
      id: 1,
      name: 'High',
      type: 'high',
      color: '#e74c3c'
    }
  ];
  columns: KanbanColumn<TaskItem>[] = [
    {
      id: 1,
      name: 'To Do',
      color: '#06b6d4',
      items: [
        {
          name: 'HINT: Check Dark Theme',
          position: 1,
          reporter: {
            id: 1,
            name: 'Pavel Salauyou'
          },
          assignee: {
            id: 1,
            name: 'Pavel Salauyou'
          },
          priority: this.priorities[1]
        },
        {
          name: 'Fix UI bug',
          position: 1,
          reporter: {
            id: 1,
            name: 'Pavel Salauyou'
          },
          assignee: {
            id: 1,
            name: 'Pavel Salauyou'
          },
          priority: this.priorities[2]
        },
        {
          name: 'Fix UI bug',
          position: 1,
          reporter: {
            id: 1,
            name: 'Pavel Salauyou'
          },
          assignee: {
            id: 1,
            name: 'Pavel Salauyou'
          },
          priority: this.priorities[2]
        },
        {
          name: 'Fix UI bug',
          position: 1,
          reporter: {
            id: 1,
            name: 'Pavel Salauyou'
          },
          assignee: {
            id: 1,
            name: 'Pavel Salauyou'
          },
          priority: this.priorities[2]
        },
        {
          name: 'Fix UI bug',
          position: 1,
          reporter: {
            id: 1,
            name: 'Pavel Salauyou'
          },
          assignee: {
            id: 1,
            name: 'Pavel Salauyou'
          },
          priority: this.priorities[2]
        },
        {
          name: 'Fix UI bug',
          position: 1,
          reporter: {
            id: 1,
            name: 'Pavel Salauyou'
          },
          assignee: {
            id: 1,
            name: 'Pavel Salauyou'
          },
          priority: this.priorities[2]
        },
        {
          name: 'Fix UI bug',
          position: 1,
          reporter: {
            id: 1,
            name: 'Pavel Salauyou'
          },
          assignee: {
            id: 1,
            name: 'Pavel Salauyou'
          },
          priority: this.priorities[2]
        },
        {
          name: 'Fix UI bug',
          position: 1,
          reporter: {
            id: 1,
            name: 'Pavel Salauyou'
          },
          assignee: {
            id: 1,
            name: 'Pavel Salauyou'
          },
          priority: this.priorities[2]
        }
      ]
    },
    {
      id: 2,
      name: 'In Progress',
      color: '#a855f7',
      items: [
        {
          name: 'Urgent Issue',
          position: 1,
          reporter: {
            id: 1,
            name: 'Pavel Salauyou'
          },
          assignee: {
            id: 1,
            name: 'Pavel Salauyou'
          },
          priority: this.priorities[0]
        }
      ]
    },
    {
      id: 3,
      name: 'Under Review',
      color: '#eab308',
      items: [
        {
          name: 'References research',
          position: 1,
          reporter: {
            id: 1,
            name: 'Pavel Salauyou'
          },
          assignee: {
            id: 1,
            name: 'Pavel Salauyou'
          },
          priority: this.priorities[2]
        },
        {
          name: 'Fix UI bug',
          position: 1,
          reporter: {
            id: 1,
            name: 'Pavel Salauyou'
          },
          assignee: {
            id: 1,
            name: 'Pavel Salauyou'
          },
          priority: this.priorities[2]
        },
        {
          name: 'Fix UI bug',
          position: 1,
          reporter: {
            id: 1,
            name: 'Pavel Salauyou'
          },
          assignee: {
            id: 1,
            name: 'Pavel Salauyou'
          },
          priority: this.priorities[2]
        },
        {
          name: 'Fix UI bug',
          position: 1,
          reporter: {
            id: 1,
            name: 'Pavel Salauyou'
          },
          assignee: {
            id: 1,
            name: 'Pavel Salauyou'
          },
          priority: this.priorities[2]
        },
        {
          name: 'Fix UI bug',
          position: 1,
          reporter: {
            id: 1,
            name: 'Pavel Salauyou'
          },
          assignee: {
            id: 1,
            name: 'Pavel Salauyou'
          },
          priority: this.priorities[2]
        }
      ]
    },
    {
      id: 4,
      name: 'Done',
      color: '#22c55e',
      items: [
      ]
    },
    {
      id: 5,
      name: 'Custom',
      color: '#2d22c5',
      items: [
      ]
    }
  ];
}
