export interface Notification {
  actor: {
    name: string;
    username: string;
    avatarUrl?: string;
  },
  notifier: {
    name: string;
    username: string;
    avatarUrl?: string;
  },
  payload: {
    folderName: string;
  },
  type: string,
  createdAt: string;
}
