import { OrgTree } from '../model/OrgTree';
import { Organisation } from '../model/Organisation';
import { RcOrgTree } from '../model/RcOrgTree';
import { UclOrganisation } from '../model/UclOrganisation';

export class OrganisationTreeMapper {
    public mapToOrganisation(orgResponseJson: string) : Organisation {
      let organisation: Organisation = new UclOrganisation();

      return organisation;
    }

    public mapToTree(organisation: Organisation) : OrgTree {
        let orgTree: OrgTree = new RcOrgTree();

        return orgTree;
    }
}