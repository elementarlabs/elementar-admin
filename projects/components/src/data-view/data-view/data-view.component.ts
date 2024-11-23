import {
  booleanAttribute,
  ChangeDetectorRef,
  Component,
  computed, contentChild, effect,
  inject, Injector,
  input,
  OnInit,
  output, TemplateRef,
  viewChild
} from '@angular/core';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef, MatRow, MatRowDef, MatTable, MatTableDataSource
} from '@angular/material/table';
import { MatCheckbox, MatCheckboxChange } from '@angular/material/checkbox';
import {
  DataView,
  DataViewAPI,
  DataViewCellRenderer,
  DataViewColumnDef, DataViewRowModelType,
  DataViewRowSelectionEvent
} from '../types';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, MatSortHeader, Sort } from '@angular/material/sort';
import { EmrSkeletonModule } from '../../skeleton';
import { NgComponentOutlet, NgTemplateOutlet } from '@angular/common';
import { DataViewActionBarDirective } from '@elementar/components/data-view/data-view-action-bar.directive';
import { DataViewEmptyDataDirective, DataViewEmptyFilterResultsDirective } from '@elementar/components/data-view';

@Component({
  selector: 'emr-data-view',
  exportAs: 'emrDataView',
  standalone: true,
  imports: [
    MatCell,
    MatCellDef,
    MatCheckbox,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef,
    MatTable,
    MatHeaderCellDef,
    MatSort,
    MatSortHeader,
    EmrSkeletonModule,
    NgComponentOutlet,
    NgTemplateOutlet,
  ],
  templateUrl: './data-view.component.html',
  styleUrl: './data-view.component.scss',
  host: {
    'class': 'emr-data-view',
    '[class.highlight-header]': 'highlightHeader()',
    '[class.hover-rows]': 'hoverRows()',
    '[class.is-loading]': 'loading()',
  }
})
export class DataViewComponent<T> implements OnInit, DataView {
  protected _emptyDataRef = contentChild(DataViewEmptyDataDirective);
  protected _emptyFilterResults = contentChild(DataViewEmptyFilterResultsDirective);
  private _cdr = inject(ChangeDetectorRef);
  private _matTable = viewChild<MatTable<T>>('table');
  private _matSort = viewChild<MatSort>(MatSort);
  protected _actionBarRef = contentChild<DataViewActionBarDirective>(DataViewActionBarDirective);

  paginator = input<MatPaginator>();
  columnDefs = input<DataViewColumnDef[]>([]);
  data = input<T[]>([]);
  withSelection = input(false, {
    transform: booleanAttribute
  });
  highlightHeader = input(false, {
    transform: booleanAttribute
  });
  rowModelType = input<DataViewRowModelType>('clientSide');
  withSorting = input(false, {
    transform: booleanAttribute
  });
  stickyHeader = input(false, {
    transform: booleanAttribute
  });
  hoverRows = input(false, {
    transform: booleanAttribute
  });
  displayedColumns = computed((): string[] => {
    const displayedColumns = this
      .columnDefs()
      .filter(colDef => colDef.visible)
      .map(colDef => colDef.dataField)
    ;

    if (this.withSelection()) {
      displayedColumns.unshift('selection');
    }

    return [...displayedColumns, '__actionBar'];
  });
  dataSource = computed((): MatTableDataSource<T> => {
    const dataSource = new MatTableDataSource<T>(this.data());

    if (this.paginator()) {
      dataSource.paginator = this.paginator() as MatPaginator;
    }

    if (this.withSorting() && this.rowModelType() === 'clientSide') {
      dataSource.sort = this._matSort() as MatSort;
    }

    dataSource.sortingDataAccessor = (item: any, property) => {
      const columnDef = this.columnDefs().find(colDef => colDef.dataField === property);

      if (columnDef) {
        if (columnDef.valueGetter) {
          return columnDef.valueGetter(item[property]);
        }
      }

      switch (property) {
        default: {
          return item[property];
        }
      }
    };

    return dataSource;
  });
  cellRenderers = input<DataViewCellRenderer[]>([]);
  loading = input(false, {
    transform: booleanAttribute
  });
  search = input<string>('');

  protected injector = inject(Injector);
  protected selection = new SelectionModel<T>(true, []);
  protected cellRenderersMap = new Map<string, any>();
  protected loadingCellRenderers = false;

  readonly rowSelectionChanged = output<DataViewRowSelectionEvent<T>>();
  readonly selectionChanged = output<T[]>();
  readonly allRowsSelectionChanged = output<boolean>();
  readonly sortChange = output<Sort>();

  get api(): DataViewAPI {
    return {
      search: (value: string): void => {
        this.dataSource().filter = value.trim().toLowerCase();
      },
      selectAll: (): void => {
        this._selectAll();
      },
      unselectAll: (): void => {
        this._unselectAll();
      }
    }
  }

  get noFilteredResults(): boolean {
    return !!(this._emptyDataRef() || this._emptyFilterResults()) &&
      ((this.dataSource().filteredData.length === 0 && this.rowModelType() === 'clientSide') ||
        (this.dataSource().data.length === 0 && this.rowModelType() === 'serverSide'))
    ;
  }

  get actionBarTemplateRef(): TemplateRef<any> | undefined {
    return this._actionBarRef()?.templateRef;
  }

  protected get emptyTemplateRef(): TemplateRef<any> {
    return this._emptyDataRef()?.templateRef as TemplateRef<any>;
  }

  protected get emptyFilterResultsTemplateRef(): TemplateRef<any> {
    return this._emptyFilterResults()?.templateRef as TemplateRef<any>;
  }

  protected get hasFilterValue(): boolean {
    return !!this.search().trim();
  }

  constructor() {
    effect(() => {
      if (this.rowModelType() === 'clientSide') {
        this.dataSource().filter = this.search().trim().toLowerCase();
      }
    }, {
      allowSignalWrites: true
    });
  }

  ngOnInit() {
    if (this.cellRenderers().length === 0) {
      return;
    }

    this.loadingCellRenderers = true;
    const components = this.cellRenderers().map(cellRenderer => cellRenderer.component());
    Promise.all(components).then(components => {
      components.forEach((component, index: number) => {
        this.cellRenderersMap.set(this.cellRenderers()[index].dataRenderer, component)
      });
      this.loadingCellRenderers = false;
      this._cdr.detectChanges();
    });
  }

  get matTable(): MatTable<T> {
    return this._matTable() as MatTable<T>;
  }

  get matSort(): MatSort {
    return this._matSort() as MatSort;
  }

  hasCellRenderer(dataRenderer: string): boolean {
    return this.cellRenderersMap.has(dataRenderer);
  }

  getCellRenderer(dataRenderer: string): any {
    return this.cellRenderersMap.get(dataRenderer);
  }

  isAllSelected(): boolean {
    return this.selection.selected.length === this.data().length;
  }

  toggleAllRows(): void {
    if (this.isAllSelected()) {
      this._unselectAll();
    } else {
      this._selectAll();
    }
  }

  rowSelectionToggle(event: MatCheckboxChange, row: T): void {
    if (event.checked) {
      this.selection.select(row);
    } else {
      this.selection.deselect(row);
    }

    this.rowSelectionChanged.emit({
      matCheckboxChange: event,
      row,
      checked: event.checked
    });
    this.selectionChanged.emit(this.selection.selected);
  }

  protected onSortChange(event: Sort): void {
    this.sortChange.emit(event);
  }

  private _selectAll(): void {
    this.selection.select(...this.data());
    this.selectionChanged.emit(this.data());
    this.allRowsSelectionChanged.emit(true);
  }

  private _unselectAll(): void {
    this.selection.clear();
    this.selectionChanged.emit([]);
    this.allRowsSelectionChanged.emit(false);
  }
}
