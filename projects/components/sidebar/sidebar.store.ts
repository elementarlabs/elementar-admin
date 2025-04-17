import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';

export interface SidebarNavState {
  activeItemKey: any;
  activeGroupKey: any;
}

const initialState: SidebarNavState = {
  activeItemKey: null,
  activeGroupKey: null,
};

export const SidebarNavStore = signalStore(
  withState(initialState),
  withMethods((store) => ({
    setItemActiveKey(activeItemKey: any): void {
      patchState(store, { activeItemKey });
    },
    isItemActive(activeItemKey: any): boolean {
      return store.activeItemKey() === activeItemKey;
    },
    setGroupActiveKey(activeGroupKey: any): void {
      patchState(store, { activeGroupKey });
    },
    isGroupActive(activeGroupKey: any): boolean {
      return store.activeGroupKey() === activeGroupKey;
    }
  }))
);
