import { EventEmitter, Injectable } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';

@Injectable()
export class TabPanelApiService {
  private _selectionModel = new SelectionModel(false);
  readonly itemIdChange = new EventEmitter<any>();

  activate(id: any, emitEvent = true) {
    this._selectionModel.select(id);

    if (emitEvent) {
      this.itemIdChange.emit(id);
    }
  }

  isActive(id: any): boolean {
    return this._selectionModel.isSelected(id);
  }

  hasActive(): boolean {
    return this._selectionModel.hasValue();
  }
}
