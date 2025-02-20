export interface Breadcrumb {
  id: any;
  name?: string;
  title?: string;
  type: 'link' | 'separator' | null | string;
  icon?: string;
  route?: string;
}
