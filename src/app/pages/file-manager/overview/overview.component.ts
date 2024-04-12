import { Component, inject } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatOptgroup, MatOption, MatRipple } from '@angular/material/core';
import { MatButton, MatIconButton } from '@angular/material/button';
import { EmrAvatarModule } from '@elementar/components';
import { MatTooltip } from '@angular/material/tooltip';
import { MatChipListbox, MatChipOption } from '@angular/material/chips';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { MatDivider } from '@angular/material/divider';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatInput } from '@angular/material/input';
import { MenuOptionGroupDirective } from '@elementar/components';
import { FileLargeGridLayoutComponent } from '../_layout/file-large-grid-layout/file-large-grid-layout.component';
import { FileListLayoutComponent } from '../_layout/file-list-layout/file-list-layout.component';
import { FileLargeListLayoutComponent } from '../_layout/file-large-list-layout/file-large-list-layout.component';
import { FileGridLayoutComponent } from '../_layout/file-grid-layout/file-grid-layout.component';
import { File, FileSelectedEvent } from '../types';

@Component({
  standalone: true,
  imports: [
    MatIcon,
    MatRipple,
    MatIconButton,
    EmrAvatarModule,
    MatTooltip,
    MatChipOption,
    MatChipListbox,
    MatCheckbox,
    MatMenu,
    MatMenuItem,
    MatMenuTrigger,
    MatDivider,
    MatOption,
    MatOptgroup,
    ReactiveFormsModule,
    MatInput,
    MenuOptionGroupDirective,
    FileLargeGridLayoutComponent,
    FileListLayoutComponent,
    FileLargeListLayoutComponent,
    FileGridLayoutComponent,
    MatButton
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {
  private _fb = inject(FormBuilder);

  settingsForm = this._fb.group({
    layout: ['grid'],
    filePreview: ['fullscreen']
  });
  starredIds: string[] = ['4'];
  files: File[] = [
    {
      id: '1',
      type: 'folder',
      size: 1000000,
      name: 'My folder',
      isShared: true,
      itemsCount: 38
    },
    {
      id: '2',
      type: 'folder',
      size: 1000000,
      name: 'Work',
      isShared: false,
      itemsCount: 12
    },
    {
      id: '3',
      type: 'folder',
      size: 1000000,
      name: 'Photos',
      isShared: false,
      itemsCount: 299
    },
    {
      id: '4',
      type: 'image',
      size: 500000,
      name: 'My Image',
      thumbnailUrl: 'https://placehold.co/200x200/FFFFFF/000000/png',
      extension: 'jpg',
      isShared: false,
      itemsCount: 1
    },
    {
      id: '5',
      type: 'archive',
      size: 23000,
      name: 'New Archive',
      extension: 'zip',
      isShared: false,
      itemsCount: 22
    }
  ];
  selectedFiles: File[] = [];

  get indeterminate(): boolean {
    return this.checked && this.selectedFiles.length !== this.files.length;
  }

  get checked(): boolean {
    return this.selectedFiles.length > 0;
  }

  fileSelected(event: FileSelectedEvent): void {
    this.selectedFiles = event.files;
  }
}
