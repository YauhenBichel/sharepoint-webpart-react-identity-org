export interface TreeOrganisationItem {
  identifier: string;
  name: string;
  title: string;
  key: string;
  short_name: string;
  level: string;
  path: string;
  active: string;
  parent_identifier?: string;
  parent_level?: string;
  children: TreeOrganisationItem[];
}
