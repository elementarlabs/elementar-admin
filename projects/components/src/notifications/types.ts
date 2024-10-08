export interface Notification {
  actor: any,
  notifier: any,
  type: string;
  createdAt: string;
  payload: any;
  isNew?: boolean;
}
