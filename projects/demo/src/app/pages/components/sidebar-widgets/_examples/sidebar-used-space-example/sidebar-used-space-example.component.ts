import { Component } from '@angular/core';
import { UsedSpaceComponent } from '@app/sidebar/_used-space/used-space.component';

@Component({
  selector: 'app-sidebar-used-space-example',
  standalone: true,
  imports: [
    UsedSpaceComponent
  ],
  templateUrl: './sidebar-used-space-example.component.html',
  styleUrl: './sidebar-used-space-example.component.scss'
})
export class SidebarUsedSpaceExampleComponent {

}
