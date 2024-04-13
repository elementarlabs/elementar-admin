import { Component, inject, Input, input, InputSignal, OnInit, output } from '@angular/core';
import { File, FileSelectedEvent } from '../../types';
import { MatOptgroup, MatOption } from '@angular/material/autocomplete';
import { MatSelect } from '@angular/material/select';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { IconComponent, MenuOptionGroupDirective } from '@elementar/components';
import { MatCheckbox, MatCheckboxChange } from '@angular/material/checkbox';
import { MatRipple } from '@angular/material/core';
import { MatMenuBarItem } from '@angular/material-experimental/menubar';
import { MatTooltip } from '@angular/material/tooltip';
import { SelectionModel } from '@angular/cdk/collections';
import { FormatFileSizePipe } from '@elementar/components';

@Component({
  selector: 'app-file-grid-layout',
  standalone: true,
  imports: [
    MatOption,
    MatSelect,
    ReactiveFormsModule,
    MatOptgroup,
    MatIcon,
    MatIconButton,
    MatDivider,
    MenuOptionGroupDirective,
    MatMenuTrigger,
    MatCheckbox,
    MatRipple,
    MatMenuItem,
    MatMenu,
    MatTooltip,
    FormatFileSizePipe,
    IconComponent
  ],
  templateUrl: './file-grid-layout.component.html',
  styleUrl: './file-grid-layout.component.scss'
})
export class FileGridLayoutComponent implements OnInit {
  private _fb = inject(FormBuilder);

  starredIds= input<string[]>([]);
  files: InputSignal<File[]> = input.required<File[]>();

  readonly fileSelected = output<FileSelectedEvent>();

  form: FormGroup;
  selectionModel: SelectionModel<string>;
  starredModel: SelectionModel<string>;
  groupByList = [
    {
      id: 'name',
      name: 'Name'
    },
    {
      id: 'modified',
      name: 'Modified'
    },
    {
      id: 'type',
      name: 'Type'
    },
    {
      id: 'extension',
      name: 'Extension'
    },
    {
      id: 'size',
      name: 'Size'
    }
  ];
  sortBy: string = 'asc';

  get groupByName(): string {
    return <string>this.groupByList.find(groupItem => groupItem.id === this.form.value['groupBy'])?.name;
  }

  constructor() {
    this.form = this._fb.group({
      groupBy: ['name']
    });
  }

  ngOnInit() {
    this.selectionModel = new SelectionModel<string>(true, []);
    this.starredModel = new SelectionModel<string>(true, this.starredIds());
  }

  sort() {
    this.sortBy = this.sortBy === 'asc' ? 'desc' : 'asc';
  }

  preventDefault(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
  }

  share(event: MouseEvent, file: File) {
    this.preventDefault(event);
  }

  copyLink(event: MouseEvent, file: File) {
    this.preventDefault(event);
  }

  toggleCheck(event: MatCheckboxChange, fileId: string): void {
    if (event.checked) {
      this.selectionModel.select(fileId);
    } else {
      this.selectionModel.deselect(fileId);
    }

    this.fileSelected.emit({
      files: this.files().filter(file => this.selectionModel.selected.includes(file.id))
    })
  }

  toggleStar(fileId: string): void {
    if (!this.starredModel.isSelected(fileId)) {
      this.starredModel.select(fileId);
    } else {
      this.starredModel.deselect(fileId);
    }
  }
}
