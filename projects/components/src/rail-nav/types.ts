import { InjectionToken } from "@angular/core";

export const RAIL_NAV = new InjectionToken('RAIL_NAV');

export interface RailNavApi {
  activeKey: () => any;
}
