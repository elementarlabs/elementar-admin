import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { Breadcrumb } from './types';

export interface BreadcrumbsState {
  breadcrumbs: Breadcrumb[],
}

const initialState: BreadcrumbsState = {
  breadcrumbs: []
};

export const BreadcrumbsStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store) => ({
    setBreadcrumbs(breadcrumbs: Breadcrumb[]): void {
      patchState(store, {
        breadcrumbs
      });
    }
  }))
);
