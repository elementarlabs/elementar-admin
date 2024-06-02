import {
  booleanAttribute,
  Component,
  ElementRef,
  forwardRef,
  inject, input,
  Input, OnChanges,
  OnInit,
  Renderer2, SimpleChanges
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
    '[class.is-clickable]': 'clickable',
    '[class.has-automatic-color]': '!!automaticColor()'
  }
})
export class AvatarComponent implements OnInit, OnChanges {
  private _elementRef = inject(ElementRef);

  @Input()
  src!: string | undefined;

  @Input({ transform: booleanAttribute })
  clickable = false;

  @Input()
  text = '';

  @Input()
  alt = '';

  automaticColor = input<string>();

  @Input()
  presenceIndicator: 'online' | 'offline' | null = null;

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['automaticColor'] && changes['automaticColor'].currentValue) {
      this._setAutomaticColor(changes['automaticColor'].currentValue);
    }
  }

  private _setAutomaticColor(color: any): void {
    if (!this.isValidHex(color)) {
      throw new Error(`Invalid ${color} color, automatic color supports only a valid hex color`);
    }

    const element = this._elementRef.nativeElement as HTMLElement;
    element.style.setProperty('--emr-avatar-bg', color);
    element.style.setProperty('--emr-avatar-border-color', this._newShade(color, -25));
    element.style.setProperty('--emr-avatar-color', this._newShade(color, -150));
  }

  private _newShade(hexColor: string, magnitude: number): string {
    hexColor = hexColor.replace(`#`, ``);
      if (hexColor.length === 6) {
      const decimalColor = parseInt(hexColor, 16);
      let r = (decimalColor >> 16) + magnitude;
      r > 255 && (r = 255);
      r < 0 && (r = 0);
      let g = (decimalColor & 0x0000ff) + magnitude;
      g > 255 && (g = 255);
      g < 0 && (g = 0);
      let b = ((decimalColor >> 8) & 0x00ff) + magnitude;
      b > 255 && (b = 255);
      b < 0 && (b = 0);
      return `#${(g | (b << 8) | (r << 16)).toString(16)}`;
    } else {
      return hexColor;
    }
  };

  isValidHex(color: any): boolean {
    if(!color || typeof color !== 'string') {
      return false;
    }

    // Validate hex values
    if(color.substring(0, 1) === '#') {
      color = color.substring(1);
    }

    switch(color.length) {
      case 3: {
        return /^[0-9A-F]{3}$/i.test(color);
      }
      case 6: {
        return /^[0-9A-F]{6}$/i.test(color);
      }
      case 8: {
        return /^[0-9A-F]{8}$/i.test(color);
      }
      default: {
        return false;
      }
    }
  }
}
