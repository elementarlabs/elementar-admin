import { Component } from '@angular/core';
import { MatChip, MatChipSet } from '@angular/material/chips';
import { CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';

export interface Vegetable {
  name: string;
}

@Component({
    selector: 'app-chips-drag-and-drop-example',
    imports: [
        MatChipSet,
        CdkDropList,
        MatChip,
        CdkDrag
    ],
    templateUrl: './chips-drag-and-drop-example.component.html',
    styleUrl: './chips-drag-and-drop-example.component.scss'
})
export class ChipsDragAndDropExampleComponent {
  vegetables: Vegetable[] = [
    { name: 'apple' },
    { name: 'banana' },
    { name: 'strawberry' },
    { name: 'orange' },
    { name: 'kiwi' },
    { name: 'cherry' },
  ];

  drop(event: CdkDragDrop<Vegetable[]>) {
    moveItemInArray(this.vegetables, event.previousIndex, event.currentIndex);
  }
}
