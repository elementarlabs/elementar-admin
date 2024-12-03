import { afterNextRender, AfterViewInit, Component, ElementRef, inject, Renderer2, viewChild } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import {
  AvatarComponent,
  AvatarGroupComponent,
  AvatarTotalComponent,
  DicebearComponent
} from '@elementar/components/avatar';
import { MatButton, MatIconButton } from '@angular/material/button';
import {
  CdkDrag,
  CdkDragDrop, CdkDragPlaceholder,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem
} from '@angular/cdk/drag-drop';
import { PanelBodyComponent, PanelComponent, PanelHeaderComponent } from '@elementar/components/panel';
import { MatRipple } from '@angular/material/core';
import { SegmentedButtonComponent, SegmentedComponent } from '@elementar/components/segmented';
import { marked } from 'marked';
import Renderer = marked.Renderer;

interface TaskPriority {
  id: any;
  name: string;
  color: string;
  type: string;
}

@Component({
  selector: 'app-kanban-board',
  imports: [
    MatIcon,
    DicebearComponent,
    MatIconButton,
    CdkDropList,
    CdkDropListGroup,
    CdkDrag,
    PanelComponent,
    PanelHeaderComponent,
    PanelBodyComponent,
    AvatarComponent,
    AvatarGroupComponent,
    AvatarTotalComponent,
    MatButton,
    MatRipple,
    SegmentedButtonComponent,
    SegmentedComponent,
  ],
  templateUrl: './kanban-board.component.html',
  styleUrl: './kanban-board.component.scss',
  // host: {
  //   'class': 'has-vertical-scroll',
  // }
})
export class KanbanBoardComponent {
  private _headerContainer = viewChild.required('headerContainer', { read: ElementRef });
  private _scrollContainer = viewChild.required('scrollContainer', { read: ElementRef });
  private _renderer = inject(Renderer2);

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
    {
      id: 1,
      name: 'Custom',
      color: '#2d22c5',
      items: [
      ]
    },
  ];
  protected _hasVerticalScroll = false;

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

  onScroll(event: Event) {
    const target = event.target as HTMLElement;
    const headerContainerElement = this._headerContainer().nativeElement as HTMLElement;
    this._renderer.setStyle(headerContainerElement, 'transform', `translate(-${target.scrollLeft}px, 0)`);
    this._hasVerticalScroll = target.scrollTop > 0;
  }
}
