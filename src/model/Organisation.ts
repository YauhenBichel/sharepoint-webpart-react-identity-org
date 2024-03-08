import { FlatOrganisationItem } from "./FlatOrganisationItem";
import { TreeOrganisationItem } from "./TreeOrganisationItem";

export interface Organisation {
  flatItems: Array<FlatOrganisationItem>;
  treeItems: Array<TreeOrganisationItem>;
}
