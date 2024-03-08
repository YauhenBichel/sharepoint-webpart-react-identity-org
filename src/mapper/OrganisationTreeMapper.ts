import { Organisation } from '../model/Organisation';
import { UclOrganisation } from '../model/UclOrganisation';
import { UclFlatOrganisationItem } from '../model/UclFlatOrganisationItem';
import { Converters } from '../utility/Converters';
import { UclTreeOrganisationItem } from '../model/UclTreeOrganisationItem';
import { TreeOrganisationItem } from '../model/TreeOrganisationItem';

export class OrganisationTreeMapper {

    converters: Converters;

    constructor() {
      this.converters = new Converters();
    }

    public mapToOrganisation(orgResponseJson: string) : Organisation {
      
      let uclOrg: Organisation = new UclOrganisation();
      const arrRespJson: Array<any> = JSON.parse(orgResponseJson).organisation_collection.organisation;
      
      uclOrg.flatItems = new Array<UclFlatOrganisationItem>();
      uclOrg.treeItems = new Array<UclTreeOrganisationItem>();
      
      for(let item of arrRespJson) {
        let uclOrgItem: UclFlatOrganisationItem = new UclFlatOrganisationItem();
        uclOrgItem.active = item.active;
        uclOrgItem.identifier = item.identifier;
        uclOrgItem.level = item.level;
        uclOrgItem.name = item.name;
        uclOrgItem.parent_identifier = item.parent_identifier;
        uclOrgItem.parent_level = item.parent_level;
        uclOrgItem.path = item.path;
        uclOrgItem.short_name = item.short_name;

        uclOrg.flatItems.push(uclOrgItem);
      }

      return uclOrg;
    }

    public mapToTree(uclOrg: Organisation) : TreeOrganisationItem[] {
        console.log("mapToTree: org: ", uclOrg);

        let treeItems = this.converters.listToTree(uclOrg.flatItems);
        console.log(JSON.stringify(treeItems[0]));

        if(!uclOrg.treeItems) {
          return new Array<TreeOrganisationItem>();
        }

        return treeItems;
    }
}