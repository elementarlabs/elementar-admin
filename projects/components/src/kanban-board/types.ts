export interface KanbanColumn<T extends KanbanItem> {
  id: any;
  name: string;
  color: string;
  items: T[]
}

export interface KanbanItem {
  name: string;
  position: number;
}

export interface KanbanItemSortedEvent {
  previousIndex: number;
  currentIndex: number;
}

export interface KanbanItemTransferredEvent<T> {
  previousContainerData: T[];
  currentContainerData: T[];
  previousIndex: number;
  currentIndex: number;
}
