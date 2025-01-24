import { Component, computed, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { AppStore } from '../../../../../store/app.store';

@Component({
  selector: 'app-show-hide-announcement-dynamically',
  imports: [
    MatButton
  ],
  templateUrl: './show-hide-announcement-dynamically.component.html',
  styleUrl: './show-hide-announcement-dynamically.component.scss'
})
export class ShowHideAnnouncementDynamicallyComponent {
  private _appStore = inject(AppStore);
  visible = computed(() => {
    return !!this._appStore.announcement();
  });

  showAnnouncement() {
    this._appStore.setAnnouncement({
      message: 'You still have not uploaded your Mart invoice due on 22 April 2025',
      variant: 'warning',
      iconName: 'warning'
    });
  }

  hideAnnouncement() {
    this._appStore.setAnnouncement(null);
  }
}
