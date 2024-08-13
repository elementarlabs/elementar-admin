export interface NavigationItem {
  type: 'heading' | 'group' | string;
  name: string;
  icon?: string;
  id?: string | number;
  link?: string;
  children?: NavigationItem[];
}
