import { EventEmitter, Injectable } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';

@Injectable()
export class TabPanelApiService {
  private _selectionModel = new SelectionModel(false);
  readonly itemIdChanged = new EventEmitter<any>();

  activate(id: any, emitEvent = true) {
    this._selectionModel.select(id);

    if (emitEvent) {
      this.itemIdChanged.emit(id);
    }
  }

  isActive(id: any): boolean {
    return this._selectionModel.isSelected(id);
  }

  hasActive(): boolean {
    return this._selectionModel.hasValue();
  }
}
