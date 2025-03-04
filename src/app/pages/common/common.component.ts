import { Component, computed, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '@app/header/header.component';
import { SidebarComponent } from '@app/sidebar/sidebar.component';
import { AppStore } from '../../store/app.store';
import {
  LayoutBodyComponent,
  LayoutComponent,
  LayoutHeaderComponent,
  LayoutSidebarComponent, LayoutTopbarComponent
} from '@elementar-ui/components/layout';
import { AnnouncementComponent } from '@elementar-ui/components/announcement';
import { IncidentsContainerComponent } from '@elementar-ui/components/incidents';

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
    IncidentsContainerComponent,
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
