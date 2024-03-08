import IdentityClient from "../api/IdentityCLient";
import { Organisation } from "../model/Organisation";
import { UclOrganisation } from "../model/UclOrganisation";
import { HttpClient } from '@microsoft/sp-http';


export class OrganisationService {
    public async getOrganisation(httpClient: HttpClient) : Promise<Organisation> {
        const response = await IdentityClient.getOrg(httpClient);
        console.log(response);

        let organisation: Organisation = new UclOrganisation();
        return organisation; 
    }
}