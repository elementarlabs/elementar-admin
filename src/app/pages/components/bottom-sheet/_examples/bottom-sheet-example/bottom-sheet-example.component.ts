import { Component } from '@angular/core';
import { MatListItem, MatListItemTitle, MatNavList } from '@angular/material/list';
import { MatLine } from '@angular/material/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-bottom-sheet-example',
  standalone: true,
  imports: [
    MatNavList,
    MatListItemTitle,
    MatLine,
    MatListItem
  ],
  templateUrl: './bottom-sheet-example.component.html',
  styleUrl: './bottom-sheet-example.component.scss'
})
export class BottomSheetExampleComponent {
  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetExampleComponent>) {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
