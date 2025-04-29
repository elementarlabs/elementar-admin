import { Component, effect, input, output, signal } from '@angular/core';
import { MatMenu, MatMenuTrigger } from '@angular/material/menu';
import { MatIcon } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';
import { MatRipple } from '@angular/material/core';
import { DicebearComponent } from '@elementar-ui/components/avatar';
import { HorizontalDividerComponent } from '@elementar-ui/components/divider';

@Component({
  selector: 'app-workspaces-select',
  imports: [
    MatMenu,
    MatMenuTrigger,
    MatIcon,
    DicebearComponent,
    HorizontalDividerComponent,
    MatButton,
    MatRipple
  ],
  templateUrl: './workspaces-select.component.html',
  styleUrl: './workspaces-select.component.scss'
})
export class WorkspacesSelectComponent {
  workspaces = input<any[]>([]);
  selectedWorkspace = input();
  protected _selectedWorkspace = signal<any>(null);

  readonly workspaceSelected = output<any>();

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
    this.workspaceSelected.emit(workspace);
  }
}
