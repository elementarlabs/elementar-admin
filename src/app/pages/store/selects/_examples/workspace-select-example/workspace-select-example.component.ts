import { Component, signal } from '@angular/core';
import { WorkspacesSelectComponent } from '@store/selects';

@Component({
  selector: 'app-workspace-select-example',
  imports: [
    WorkspacesSelectComponent
  ],
  templateUrl: './workspace-select-example.component.html',
  styleUrl: './workspace-select-example.component.scss'
})
export class WorkspaceSelectExampleComponent {
  selectedWorkspace = signal({
    id: 'slack',
    name: 'Slack',
    logoUrl: '',
    membersCount: 12
  });
  workspaces = signal([
    {
      id: 'figma',
      name: 'Figma',
      logoUrl: '',
      membersCount: 96
    },
    {
      id: 'slack',
      name: 'Slack',
      logoUrl: '',
      membersCount: 12
    }
  ]);
}
