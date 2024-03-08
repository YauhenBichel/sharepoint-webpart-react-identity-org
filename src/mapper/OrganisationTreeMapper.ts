import { OrgTree } from '../model/OrgTree';
import { Organisation } from '../model/Organisation';
import { RcOrgTree } from '../model/RcOrgTree';
import { UclOrganisation } from '../model/UclOrganisation';
import { UclOrganisationItem } from '../model/UclOrganisationItem';

export class OrganisationTreeMapper {
    public mapToOrganisation(orgResponseJson: string) : Organisation {
      let uclOrg: Organisation = new UclOrganisation();
      const arrRespJson: Array<any> = JSON.parse(orgResponseJson).organisation_collection.organisation;
      
      uclOrg.items = new Array<UclOrganisationItem>();

      for(let item of arrRespJson) {
        let uclOrgItem: UclOrganisationItem = new UclOrganisationItem();
        uclOrgItem.active = item.active;
        uclOrgItem.identifier = item.identifier;
        uclOrgItem.level = item.level;
        uclOrgItem.name = item.name;
        uclOrgItem.parent_identifier = item.parent_identifier;
        uclOrgItem.parent_level = item.parent_level;
        uclOrgItem.path = item.path;
        uclOrgItem.short_name = item.short_name;

        uclOrg.items?.push(uclOrgItem);
      }

      return uclOrg;
    }

    public mapToTree(org: Organisation) : OrgTree {
        console.log("mapToTree: org: ", org);

        let orgTree: OrgTree = new RcOrgTree();

        return orgTree;
    }
}