import { Component, computed, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { AnnouncementStore } from '@elementar-ui/components/announcement';

@Component({
  selector: 'app-show-hide-announcement-dynamically',
  imports: [
    MatButton
  ],
  templateUrl: './show-hide-announcement-dynamically.component.html',
  styleUrl: './show-hide-announcement-dynamically.component.scss'
})
export class ShowHideAnnouncementDynamicallyComponent {
  private _announcementStore = inject(AnnouncementStore);
  visible = computed(() => {
    return !!this._announcementStore.announcement();
  });

  showAnnouncement() {
    this._announcementStore.show({
      message: 'You still have not uploaded your Mart invoice due on 22 April 2025',
      variant: 'warning',
      iconName: 'warning'
    });
  }

  hideAnnouncement() {
    this._announcementStore.hide();
  }
}
