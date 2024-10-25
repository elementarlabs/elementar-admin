import { Component } from '@angular/core';
import { CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-sortable-tabs-example',
  standalone: true,
  imports: [
    CdkDrag,
    CdkDropList,
    MatTabsModule
  ],
  templateUrl: './sortable-tabs-example.component.html',
  styleUrl: './sortable-tabs-example.component.scss'
})
export class SortableTabsExampleComponent {
  protected tabs = ['One', 'Two', 'Three', 'Four', 'Five'];
  protected selectedTabIndex = 0;

  drop(event: CdkDragDrop<string[]>) {
    const prevActive = this.tabs[this.selectedTabIndex];
    moveItemInArray(this.tabs, event.previousIndex, event.currentIndex);
    this.selectedTabIndex = this.tabs.indexOf(prevActive);
  }
}
