import { OrgTree } from '../model/OrgTree';
import { Organisation } from '../model/Organisation';
import { RcOrgTree } from '../model/RcOrgTree';
import { UclOrganisation } from '../model/UclOrganisation';
import { UclOrganisationItem } from '../model/UclOrganisationItem';
import { RcTreeItem } from '../model/RcTreeItem';
import { TreeItem } from '../model/TreeItem';

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

    public mapToTree(uclOrg: Organisation) : OrgTree {
        console.log("mapToTree: org: ", uclOrg);

        let orgTree: OrgTree = new RcOrgTree();
        if(!uclOrg.items) {
          return orgTree;
        }

        orgTree.items = new Array<TreeItem>();

        for(let item of uclOrg.items) {
          if(item.level === '0') {
            let treeItem: RcTreeItem = new RcTreeItem();
            treeItem.key = item.level + '-' + item.level;
            treeItem.title = item.name + '(' + item.identifier + ')';
            orgTree.items.push();
          }
        }

        return orgTree;
    }
}