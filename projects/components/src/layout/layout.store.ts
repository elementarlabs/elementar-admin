import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';

type VisibilityState = {
  [propName: string]: boolean;
};

const initialState: VisibilityState = {
  root: true
};

export const LayoutSidebarStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store) => ({
    showSidebarVisibility(layoutId: string, isShown: boolean): void {
      patchState(store, {
        [layoutId]: isShown
      });
    }
  }))
);
