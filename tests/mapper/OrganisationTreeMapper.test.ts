/// <reference types="jest" />
import { OrganisationTreeMapper } from '../../src/mapper/OrganisationTreeMapper';
import { Organisation } from '../../src/model/Organisation';
import * as orgResponseJson from '../data/JsonOrgResponse.json';

describe('Organisation Tree Mapper', () => {

  it('should root web part element exists', () => {

    let mapper: OrganisationTreeMapper = new OrganisationTreeMapper(); 
    
    let uclOrg: Organisation = mapper.mapToOrganisation(JSON.stringify(orgResponseJson.response));

    expect(uclOrg.flatItems.length).toEqual(3);
  });
});