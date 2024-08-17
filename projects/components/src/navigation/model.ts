export interface NavigationItem {
  key: any;
  type: 'heading' | 'group' | 'link' | 'item' | 'divider' | string;
  name?: string;
  icon?: string;
  children?: NavigationItem[];
  link?: string;
  [prop: string]: any;
}
