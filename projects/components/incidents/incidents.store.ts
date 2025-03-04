import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { Incident } from './types';

export interface IncidentsState {
  incidents: Incident[],
  title: string;
  description: string;
}

const initialState: IncidentsState = {
  incidents: [],
  title: '',
  description: '',
};

export const IncidentsStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store) => ({
    show(state: IncidentsState): void {
      patchState(store, {
        ...state
      });
    },
    hide(): void {
      patchState(store, {
        incidents: []
      });
    }
  }))
);
