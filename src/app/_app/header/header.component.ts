import { Component, computed, inject } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatAnchor, MatButton, MatIconButton } from '@angular/material/button';
import { MatBadge } from '@angular/material/badge';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { MatDivider } from '@angular/material/divider';
import { MatTooltip } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import { DicebearComponent } from '@elementar-ui/components/avatar';
import { SoundEffectDirective } from '@elementar-ui/components/core';
import { PopoverTriggerForDirective } from '@elementar-ui/components/popover';
import { LayoutApiService } from '@elementar-ui/components/layout';
import { AssistantSearchComponent, NotificationsPopoverComponent } from '../../_store/header';
import { DrawerComponent } from '@elementar-ui/components/drawer';
import { ChatComponent } from '../../_store/chat/chat/chat.component';
import {
  ColorSchemeDarkDirective,
  ColorSchemeLightDirective,
  ColorSchemeSwitcherComponent
} from '@elementar-ui/components/color-scheme';

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
    PopoverTriggerForDirective,
    DrawerComponent,
    ChatComponent,
    ColorSchemeDarkDirective,
    ColorSchemeLightDirective,
    ColorSchemeSwitcherComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  host: {
    'class': 'block w-full'
  }
})
export class HeaderComponent {
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
