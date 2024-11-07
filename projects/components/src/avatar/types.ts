import { InjectionToken } from '@angular/core';

export const AVATAR_ACCESSOR = new InjectionToken('AVATAR_ACCESSOR');
export type AvatarPresenceIndicator = 'online' | 'offline' | 'away' | null | string;
