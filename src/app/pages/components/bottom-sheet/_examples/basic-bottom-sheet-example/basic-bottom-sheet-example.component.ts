import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';
import { BottomSheetExampleComponent } from '../bottom-sheet-example/bottom-sheet-example.component';

@Component({
  selector: 'app-basic-bottom-sheet-example',
  standalone: true,
  imports: [
    MatButton
  ],
  templateUrl: './basic-bottom-sheet-example.component.html',
  styleUrl: './basic-bottom-sheet-example.component.scss'
})
export class BasicBottomSheetExampleComponent {
  constructor(private _bottomSheet: MatBottomSheet) {}

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetExampleComponent);
  }
}
