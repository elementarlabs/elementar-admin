import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';

export interface GlobalState {
  screenLoading: boolean;
  sidebarHidden: boolean;
  pageTitle: string;
}

const initialGlobalState: GlobalState = {
  screenLoading: true,
  sidebarHidden: false,
  pageTitle: ''
};

export const GlobalStore = signalStore(
  { providedIn: 'root' },
  withState(initialGlobalState),
  withMethods((store) => ({
    setScreenLoading(isLoading: boolean) {
      patchState(store, {
        screenLoading: isLoading
      });
    },
    setPageTitle(pageTitle: string) {
      patchState(store, {
        pageTitle
      });
    }
  }))
);
