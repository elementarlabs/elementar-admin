import { Component, input, signal } from '@angular/core';
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

  selectedWorkspace = signal<any>(null);

  selectWorkspace(workspace: any) {
    this.selectedWorkspace.set(workspace);
  }
}
