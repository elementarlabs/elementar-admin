import { Component, inject, Input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatAnchor, MatButton, MatIconButton } from '@angular/material/button';
import { AsyncPipe } from '@angular/common';
import { MatFormField, MatPrefix } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatBadge } from '@angular/material/badge';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { MatDivider } from '@angular/material/divider';
import { MatTooltip } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import { EmrPopoverModule } from '@elementar/components/popover';
import { IconComponent } from '@elementar/components/icon';
import { SoundEffectDirective, ThemeManagerService } from '@elementar/components/core';
import { LayoutApiService } from '@elementar/components/layout';
import { DicebearComponent } from '@elementar/components/avatar';
import { AssistantSearchComponent, NotificationsPopoverComponent } from '@elementar/store/header';

@Component({
    selector: 'app-header',
    imports: [
        MatIcon,
        MatIconButton,
        AsyncPipe,
        MatFormField,
        MatInput,
        MatPrefix,
        MatBadge,
        MatMenu,
        MatMenuTrigger,
        MatMenuItem,
        DicebearComponent,
        MatDivider,
        MatButton,
        MatTooltip,
        EmrPopoverModule,
        RouterLink,
        AssistantSearchComponent,
        IconComponent,
        MatAnchor,
        SoundEffectDirective,
        NotificationsPopoverComponent
    ],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    host: {
        'class': 'block w-full h-full'
    }
})
export class HeaderComponent {
  protected _themeManager = inject(ThemeManagerService);
  private _layoutApi = inject(LayoutApiService);

  @Input()
  sidebarHidden = false;

  toggleSidebar(): void {
    if (!this.sidebarHidden) {
      this._layoutApi.hideSidebar('root');
    } else {
      this._layoutApi.showSidebar('root');
    }

    this.sidebarHidden = !this.sidebarHidden;
  }
}
