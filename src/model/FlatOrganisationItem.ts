export interface FlatOrganisationItem {
  identifier: string;
  name: string;
  short_name: string;
  level: string;
  path: string;
  active: string;
  parent_identifier?: string;
  parent_level?: string;
}
