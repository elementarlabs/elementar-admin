import {
  Component,
  contentChild,
  ElementRef,
  inject,
  input,
  output,
  Renderer2,
  signal,
  viewChild
} from '@angular/core';
import {
  CdkDrag,
  CdkDragDrop, CdkDragEnd, CdkDragMove, CdkDragStart,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem
} from '@angular/cdk/drag-drop';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { MatRipple } from '@angular/material/core';
import { PanelBodyComponent, PanelComponent, PanelHeaderComponent } from '@elementar/components/panel';
import {
  KanbanColumn,
  KanbanItem,
  KanbanItemSortedEvent,
  KanbanItemTransferredEvent
} from '@elementar/components/kanban-board';
import { KanbanItemDefDirective } from '@elementar/components/kanban-board/kanban-item-def.directive';
import { NgTemplateOutlet } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'emr-kanban-board',
  exportAs: 'emrKanbanBoard',
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
    NgTemplateOutlet,
    FormsModule,
    MatMenu,
    MatMenuItem,
    MatMenuTrigger
  ],
  templateUrl: './kanban-board.component.html',
  styleUrl: './kanban-board.component.scss',
  host: {
    class: 'emr-kanban-board',
    '[class.is-dragging-active]': 'isDraggingActive'
  }
})
export class KanbanBoardComponent<T extends KanbanColumn<K>, K extends KanbanItem> {
  private _elementRef = inject(ElementRef)
  protected _itemTplDef = contentChild.required(KanbanItemDefDirective);
  private _headerContainer = viewChild.required('headerContainer', { read: ElementRef });
  private _scrollContainer = viewChild.required('scrollContainer', { read: ElementRef });
  private _scrollContainerContent = viewChild.required('scrollContainerContent', { read: ElementRef });
  private _renderer = inject(Renderer2);

  columns = input<T[]>([]);
  colors = input<string[]>([]);

  protected _hasVerticalScroll = signal(false);

  readonly columnEdit = output<T>();
  readonly columnDelete = output<{ column: T, index: number }>();
  readonly itemAdd = output<void>();
  readonly itemClick = output<K>();
  readonly itemDropped = output<CdkDragDrop<K[]>>();
  readonly itemSorted = output<KanbanItemSortedEvent>();
  readonly itemTransferred = output<KanbanItemTransferredEvent<K>>();

  private _itemWidth = 0;
  protected isDraggingActive = false;

  onDropped(event: CdkDragDrop<K[]>) {
    this.itemDropped.emit(event);

    if (event.previousContainer === event.container) {
      this.itemSorted.emit({
        previousIndex: event.previousIndex,
        currentIndex: event.currentIndex
      });
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      this.itemTransferred.emit({
        previousContainerData: event.previousContainer.data,
        currentContainerData: event.container.data,
        previousIndex: event.previousIndex,
        currentIndex: event.currentIndex
      });
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
    this._hasVerticalScroll.set(target.scrollTop > 0);
  }

  onDragStarted(event: CdkDragStart, element: HTMLElement) {
    console.log(event);
    const sourceRect = (event.source.element.nativeElement as HTMLElement).getBoundingClientRect();
    const targetRect = (event.event.target  as HTMLElement).getBoundingClientRect();
    console.log(targetRect);
    // console.log(event.event);
    // console.log(sourceRect);
    console.log(element);

    this._itemWidth = sourceRect.width;
    this.isDraggingActive = true;
  }

  onDragMoved(event: CdkDragMove<K>) {
    const scrollContainer = this._scrollContainer().nativeElement as HTMLElement;
    const scrollContainerWidth = scrollContainer.getBoundingClientRect().width;
    // console.log(event.delta);
    // console.log(event.distance.x);
    // console.log(event.pointerPosition.x);
    // console.log(scrollContainer.getBoundingClientRect().x);
    //
    // const scrollContainerOffsetX = event.pointerPosition.x - scrollContainer.getBoundingClientRect().x;
    // const itemOffsetXEnd = scrollContainerOffsetX + this._itemWidth + 100;
    //
    // console.log(itemOffsetXEnd);
    //
    // if (itemOffsetXEnd >= scrollContainerWidth) {
    //   console.log(itemOffsetXEnd, scrollContainerWidth);
    //   const scrollContainer = this._scrollContainer().nativeElement as HTMLElement;
    //   // scrollContainer.scrollLeft = scrollContainer.scrollWidth - scrollContainerWidth;
    //
    //   scrollContainer.scroll({
    //     left: scrollContainer.scrollWidth - scrollContainerWidth,
    //     behavior: 'smooth'
    //   })
    // }

    // const scrollDeltaX = scrollContainer.scrollWidth - scrollContainer.getBoundingClientRect().width - scrollContainer.scrollLeft;
  }

  onDragEnded(event: CdkDragEnd) {
    this.isDraggingActive = false;
  }

  private _scrollTo() {

  }
}
