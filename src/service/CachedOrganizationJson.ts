import * as orgResponseJson from '../data/JsonOrgResponse.json';
console.log(orgResponseJson);

export class CachedOrgResponseJson {
    public getOrgResponseJson() {
        return orgResponseJson.response.organisation_collection.organisation;
    }
}