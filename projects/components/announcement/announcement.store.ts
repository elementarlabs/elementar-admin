import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { Announcement } from './types';

export interface AnnouncementState {
  announcement: Announcement | null;
}

const initialState: AnnouncementState = {
  announcement: null,
};

export const AnnouncementStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store) => ({
    show(announcement: Announcement): void {
      patchState(store, { announcement });
    },
    hide() {
      patchState(store, { announcement: null });
    }
  }))
);
