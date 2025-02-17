import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';

export interface Announcement {
  variant: string;
  message: string;
  iconName?: string;
}

type AppState = {
  announcement: Announcement | null
};

const initialState: AppState = {
  announcement: null
};

export const AppStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store) => ({
    setAnnouncement(announcement: Announcement | null): void {
      patchState(store, () => ({ announcement }));
    },
  }))
);
