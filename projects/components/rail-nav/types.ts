import { InjectionToken } from "@angular/core";

export const RAIL_NAV = new InjectionToken('RAIL_NAV');

export interface RailNavAPI {
  getActiveKey: () => any;
  activateItem: (key: any) => void;
  isActive: (key: any) => boolean;
}

export interface RailNavComponent {
  api: RailNavAPI;
}
