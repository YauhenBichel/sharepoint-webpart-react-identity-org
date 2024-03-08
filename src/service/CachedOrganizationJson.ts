import * as orgResponseJson from '../data/JsonOrgResponse.json';

export class CachedOrgResponseJson {
    public getOrgResponseJson() : string {
        return JSON.stringify(orgResponseJson.response);
    }
}