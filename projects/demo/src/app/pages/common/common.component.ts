import { Component, computed, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent, LayoutTopbarComponent } from '@elementar/components/layout';
import { LayoutBodyComponent } from '@elementar/components/layout';
import { LayoutSidebarComponent } from '@elementar/components/layout';
import { LayoutHeaderComponent } from '@elementar/components/layout';
import { HeaderComponent } from '@demo/app/header/header.component';
import { SidebarComponent } from '@demo/app/sidebar/sidebar.component';
import { AnnouncementComponent } from '@elementar/components/announcement';
import { AppStore } from '../../store/app.store';

@Component({
  imports: [
    RouterOutlet,
    HeaderComponent,
    SidebarComponent,
    LayoutComponent,
    LayoutBodyComponent,
    LayoutSidebarComponent,
    LayoutHeaderComponent,
    AnnouncementComponent,
    LayoutTopbarComponent,
  ],
  templateUrl: './common.component.html'
})
export class CommonComponent {
  private _appStore = inject(AppStore);
  announcement = computed(() => {
    return this._appStore.announcement();
  });

  onClose() {
    this._appStore.setAnnouncement(null);
  }
}
