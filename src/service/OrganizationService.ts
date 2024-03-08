import IdentityClient from '../api/IdentityCLient';
import { OrganisationTreeMapper } from '../mapper/OrganisationTreeMapper';
import { Organisation } from '../model/Organisation';
import { HttpClient } from '@microsoft/sp-http';
import { UclOrganisation } from '../model/UclOrganisation';
import { CachedOrgResponseJson } from './CachedOrganizationJson';

export class OrganisationService {

    orgTreeMapper: OrganisationTreeMapper;
    cachedOrg: CachedOrgResponseJson;

    constructor() {
        this.orgTreeMapper = new OrganisationTreeMapper();
        this.cachedOrg = new CachedOrgResponseJson();
    }

    public async getOrganisation(httpClient: HttpClient) : Promise<Organisation> {

        let uclOrg = new UclOrganisation();

        try {
        const response = await IdentityClient.getOrg(httpClient);

        uclOrg = this.orgTreeMapper.mapToOrganisation(response);
        console.log("org service: getOrg: uclOrg:", uclOrg);

        } catch(error) {
            console.log('Issue is happened during fetching identity organisation. Loaded cached version of organisation.');
            console.log(error);
            
            uclOrg = this.orgTreeMapper.mapToOrganisation(this.cachedOrg.getOrgResponseJson());
            console.log("org service: getOrg: catch: uclOrg:", uclOrg);
        }

        return uclOrg; 
    }
}