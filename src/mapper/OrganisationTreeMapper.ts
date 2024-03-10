import { Organisation } from '../model/Organisation';
import { UclOrganisation } from '../model/UclOrganisation';
import { UclFlatOrganisationItem } from '../model/UclFlatOrganisationItem';
import { UclTreeOrganisationItem } from '../model/UclTreeOrganisationItem';
import { TreeOrganisationItem } from '../model/TreeOrganisationItem';
import { FlatOrganisationItem } from '../model/FlatOrganisationItem';

export class OrganisationTreeMapper {

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

        let orgList = uclOrg.flatItems;
        
        let map: any = {};
        let mapNodes: any = {};
        let node: TreeOrganisationItem;
        let roots: Array<TreeOrganisationItem> = new Array<TreeOrganisationItem>();
        
        for (let i = 0; i < orgList.length; i++) {
          map[orgList[i].identifier] = i;
          mapNodes[orgList[i].identifier] = this.flatItemToTreeItem(orgList[i]);
        }
        
        for (let i = 0; i < orgList.length; i++) {
          node = mapNodes[orgList[i].identifier];

          if (node.parent_identifier) {
            let parentNode: TreeOrganisationItem = mapNodes[node.parent_identifier];
            node.key = parentNode.key;

            let children: TreeOrganisationItem[] = parentNode.children;
            node.key += '-' + children.length;
          
            node.title = node.name + ' (' + node.identifier + ')';
            children.push(node);
          } else {
            node.key = '0-' + roots.length;
            roots.push(node);
          }
        }
        return roots;
    }

    private flatItemToTreeItem(flatItem : FlatOrganisationItem) : TreeOrganisationItem {
      let treeNode: TreeOrganisationItem = new UclTreeOrganisationItem();
      treeNode.active = flatItem.active;
      treeNode.key = "0-0";
      treeNode.title = flatItem.name + " (" + flatItem.identifier + " )";
      treeNode.children = new Array<TreeOrganisationItem>();
      treeNode.identifier = flatItem.identifier;
      treeNode.level = flatItem.level;
      treeNode.name = flatItem.name;
      treeNode.parent_identifier = flatItem.parent_identifier;
      treeNode.parent_level = flatItem.parent_level;
      treeNode.path = flatItem.path;
      treeNode.short_name = flatItem.short_name;

      return treeNode;
  }
}