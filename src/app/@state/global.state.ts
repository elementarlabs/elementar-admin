import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';

export type GlobalState = {
  screenLoading: boolean;
  sidebarHidden: boolean;
};

const initialGlobalState: GlobalState = {
  screenLoading: true,
  sidebarHidden: false
};

export const GlobalStore = signalStore(
  { providedIn: 'root' },
  withState(initialGlobalState),
  withMethods((store) => ({
    setScreenLoading(isLoading: boolean) {
      patchState(store, {
        screenLoading: isLoading
      });
    }
  }))
);
