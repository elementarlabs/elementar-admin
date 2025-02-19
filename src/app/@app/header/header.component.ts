import { Component, computed, inject, Input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatAnchor, MatButton, MatIconButton } from '@angular/material/button';
import { MatBadge } from '@angular/material/badge';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { MatDivider } from '@angular/material/divider';
import { MatTooltip } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import { SoundEffectDirective, ThemeManagerService } from '@elementar-ui/components';
import { LayoutApiService } from '@elementar-ui/components';
import { DicebearComponent } from '@elementar-ui/components';
import { AssistantSearchComponent, NotificationsPopoverComponent } from '@store/header';
import { PopoverTriggerForDirective } from '@elementar-ui/components';

@Component({
  selector: 'app-header',
  imports: [
    MatIcon,
    MatIconButton,
    MatBadge,
    MatMenu,
    MatMenuTrigger,
    MatMenuItem,
    DicebearComponent,
    MatDivider,
    MatButton,
    MatTooltip,
    RouterLink,
    AssistantSearchComponent,
    MatAnchor,
    SoundEffectDirective,
    NotificationsPopoverComponent,
    PopoverTriggerForDirective
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  host: {
    'class': 'block w-full'
  }
})
export class HeaderComponent {
  protected _themeManager = inject(ThemeManagerService);
  private _layoutApi = inject(LayoutApiService);

  sidebarShown= computed(() => {
    return this._layoutApi.isSidebarShown('root')
  });

  toggleSidebar(): void {
    if (this.sidebarShown()) {
      this._layoutApi.hideSidebar('root');
    } else {
      this._layoutApi.showSidebar('root');
    }
  }
}
