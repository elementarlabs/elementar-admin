export type AnnouncementVariant = 'neutral' | 'negative' | 'warning' | 'positive' | 'informative' | string;
export interface Announcement {
  iconName?: string;
  variant: AnnouncementVariant;
  message: string;
}
