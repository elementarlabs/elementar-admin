import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { DicebearComponent } from '@elementar/components/avatar';
import { MatIconButton } from '@angular/material/button';

interface TaskPriority {
  id: any;
  name: string;
  color: string;
  type: string;
}

@Component({
  selector: 'app-kanban-board',
  standalone: true,
  imports: [
    MatIcon,
    DicebearComponent,
    MatIconButton
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
  columns = [
    {
      id: 1,
      name: 'TO DO',
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
        }
      ]
    },
    {
      id: 1,
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
    }
  ];
}
