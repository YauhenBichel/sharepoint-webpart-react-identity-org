import { FlatOrganisationItem } from './FlatOrganisationItem';
import { Organisation } from './Organisation';
import { TreeOrganisationItem } from './TreeOrganisationItem';

export class UclOrganisation implements Organisation {
  treeItems: TreeOrganisationItem[];
  flatItems: FlatOrganisationItem[];
}
