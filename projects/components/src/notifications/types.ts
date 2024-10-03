export interface Notification {
  actor: {
    id: string | number; // unique key of actor
    name: string;
    username: string;
    avatarUrl?: string;
  },
  notifier: {
    id: string | number; // unique key of notifier
    name: string;
    username: string;
    avatarUrl?: string;
  },
  entity: {
    content: any;
  },
  type: string,
  createdAt: string;
  isNew?: boolean;
}
