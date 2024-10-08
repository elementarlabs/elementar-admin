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
    content: any;
  },
  typeId: string,
  createdAt: string;
}
