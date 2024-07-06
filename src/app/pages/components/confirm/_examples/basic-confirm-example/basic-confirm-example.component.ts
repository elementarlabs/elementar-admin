import { Component, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { ConfirmManager } from '@elementar/components/confirm';

@Component({
  selector: 'app-basic-confirm-example',
  standalone: true,
  imports: [
    MatButton
  ],
  templateUrl: './basic-confirm-example.component.html',
  styleUrl: './basic-confirm-example.component.scss'
})
export class BasicConfirmExampleComponent {
  private _confirmManager = inject(ConfirmManager);

  open() {
    const confirmDef = this._confirmManager.open({
      title: 'Confirm unpublish',
      description: 'You are about to unpublish all Posts in the selection. Are you sure?'
    });
    confirmDef.canceled.subscribe(() => {
      console.log('Cancelled!');
    });
    confirmDef.confirmed.subscribe(() => {
      console.log('Confirmed!');
    });
  }
}
