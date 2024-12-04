import { Component, contentChild, ElementRef, inject, input, Renderer2, viewChild } from '@angular/core';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem
} from '@angular/cdk/drag-drop';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { MatRipple } from '@angular/material/core';
import { PanelBodyComponent, PanelComponent, PanelHeaderComponent } from '@elementar/components/panel';
import { KanbanColumn, KanbanItem } from '@elementar/components/kanban-board';
import { KanbanItemDefDirective } from '@elementar/components/kanban-board/kanban-item-def.directive';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'emr-kanban-board',
  imports: [
    CdkDrag,
    CdkDropList,
    CdkDropListGroup,
    MatIcon,
    MatIconButton,
    MatRipple,
    PanelBodyComponent,
    PanelComponent,
    PanelHeaderComponent,
    NgTemplateOutlet
  ],
  templateUrl: './kanban-board.component.html',
  styleUrl: './kanban-board.component.scss'
})
export class KanbanBoardComponent<T extends KanbanColumn<K>, K extends KanbanItem> {
  protected _itemTplDef = contentChild.required(KanbanItemDefDirective);
  private _headerContainer = viewChild.required('headerContainer', { read: ElementRef });
  private _scrollContainer = viewChild.required('scrollContainer', { read: ElementRef });
  private _renderer = inject(Renderer2);

  columns = input<T[]>([]);

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
