import { Component, effect, input, signal } from '@angular/core';
import { MatMenu, MatMenuTrigger } from '@angular/material/menu';
import { MatIcon } from '@angular/material/icon';
import { DicebearComponent, HorizontalDividerComponent } from '@elementar-ui/components';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-workspaces-select',
  imports: [
    MatMenu,
    MatMenuTrigger,
    MatIcon,
    DicebearComponent,
    HorizontalDividerComponent,
    MatButton
  ],
  templateUrl: './workspaces-select.component.html',
  styleUrl: './workspaces-select.component.scss'
})
export class WorkspacesSelectComponent {
  workspaces = input<any[]>([]);
  selectedWorkspace = input();
  protected _selectedWorkspace = signal<any>(null);

  constructor() {
    effect(() => {
      this._selectedWorkspace.set(this.selectedWorkspace());
    });
  }

  selectWorkspace(workspace: any) {
    if (this._selectedWorkspace()?.id === workspace.id) {
      return;
    }

    this._selectedWorkspace.set(workspace);
  }
}
