import { FlatOrganisationItem } from '../model/FlatOrganisationItem';
import { TreeOrganisationItem } from '../model/TreeOrganisationItem';
import { UclFlatOrganisationItem } from '../model/UclFlatOrganisationItem';
import { UclTreeOrganisationItem } from '../model/UclTreeOrganisationItem';

export class Converters {
    public listToTree(orgList: Array<UclFlatOrganisationItem>) : Array<TreeOrganisationItem> {
        let map: any = {};
        let node: TreeOrganisationItem;
        let roots: Array<TreeOrganisationItem> = new Array<TreeOrganisationItem>();
        let treeItems: Array<TreeOrganisationItem> = new Array<TreeOrganisationItem>();
        
        for (let i = 0; i < orgList.length; i++) {
          map[orgList[i].identifier] = i;
          treeItems[i] = this.flatItemToTreeItem(orgList[i]);
        }
        
        for (let i = 0; i < treeItems.length; i++) {
          node = treeItems[i];

          if (node.parent_identifier) {
            if(node.level === '0') {
                node.key = node.level + '-' + node.level;
            } else {
                node.key = node.level + '-' + node.level;
                for(let i = 0; i < +node.level; i++) {
                    node.key += '-' + node.level
                }
            }
            node.title = node.name + ' (' + node.identifier + ')';

            treeItems[map[node.parent_identifier]].children.push(node);
          } else {
            roots.push(node);
          }
        }
        return treeItems;
    }
    
    private flatItemToTreeItem(flatItem : FlatOrganisationItem) : TreeOrganisationItem {
        let treeNode: TreeOrganisationItem = new UclTreeOrganisationItem();
        treeNode.active = flatItem.active;
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