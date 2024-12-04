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
