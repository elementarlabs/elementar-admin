import {
  booleanAttribute,
  Component,
  ElementRef,
  forwardRef,
  inject,
  Input,
  OnInit,
  Renderer2
} from '@angular/core';
import { AvatarColor, ULT_AVATAR_ACCESSOR } from '../avatar.properties';

@Component({
  selector: 'emr-avatar,[emr-avatar]',
  exportAs: 'emrAvatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
  providers: [
    {
      provide: ULT_AVATAR_ACCESSOR,
      useExisting: forwardRef(() => AvatarComponent),
      multi: true
    }
  ],
  host: {
    'class': 'emr-avatar',
    '[class.is-clickable]': 'clickable'
  }
})
export class AvatarComponent implements OnInit {
  @Input()
  src!: string | undefined;

  @Input({ transform: booleanAttribute })
  clickable = false;

  @Input()
  text = '';

  @Input()
  alt = '';

  @Input()
  presenceIndicator: 'online' | 'offline' | null = null;

  ngOnInit(): void {
  }
}
