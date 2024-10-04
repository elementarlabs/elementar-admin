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
  entity: {
    content: any;
  },
  type: string,
  createdAt: string;
}
