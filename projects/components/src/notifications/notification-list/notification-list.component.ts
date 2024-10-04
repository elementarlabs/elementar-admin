import {
  AfterContentInit,
  Component,
  contentChild,
  contentChildren,
  input,
  QueryList,
  TemplateRef
} from '@angular/core';
import { EmrSkeletonModule } from '@elementar/components/skeleton';
import { HDividerComponent } from '@elementar/components/divider';
import { RouterLink } from '@angular/router';
import { NgTemplateOutlet } from '@angular/common';
import { NotificationControlsDefDirective, NotificationDefDirective } from '@elementar/components/notifications';

@Component({
  selector: 'emr-notification-list',
  exportAs: 'emrNotificationList',
  standalone: true,
  imports: [
    EmrSkeletonModule,
    HDividerComponent,
    RouterLink,
    NgTemplateOutlet
  ],
  templateUrl: './notification-list.component.html',
  styleUrl: './notification-list.component.scss',
  host: {
    'class': 'emr-notification-list'
  }
})
export class NotificationListComponent implements AfterContentInit {
  readonly defs = contentChildren(NotificationDefDirective);
  readonly controlsDef = contentChild(NotificationControlsDefDirective);

  notifications = input<any[]>([]);

  protected _initialized = false;
  protected _defsMap = new Map<string, TemplateRef<any>>();

  get controlsTpl(): TemplateRef<any> {
    return this.controlsDef()?.templateRef as TemplateRef<any>;
  }

  ngAfterContentInit() {
    this.defs().forEach((def: NotificationDefDirective) => {
      this._defsMap.set(def.emrNotificationDef(), def.templateRef);
    });
    this._initialized = true;
  }

  getNotificationTemplate(type: string): TemplateRef<any> {
    if (!this._defsMap.has(type)) {
      throw new Error(`Invalid type "${type}" for notification def`);
    }

    return this._defsMap.get(type) as TemplateRef<any>;
  }
}
