import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { DicebearComponent } from '@elementar/components/avatar';
import { MatIconButton } from '@angular/material/button';
import {
  CdkDrag,
  CdkDragDrop, CdkDragPlaceholder,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem
} from '@angular/cdk/drag-drop';

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
    MatIconButton,
    CdkDropList,
    CdkDropListGroup,
    CdkDrag,
    CdkDragPlaceholder
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
    },
    {
      id: 1,
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
        }
      ]
    },
    {
      id: 1,
      name: 'Done',
      color: '#22c55e',
      items: [
      ]
    },
  ];

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}