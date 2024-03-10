import { HttpClient, IHttpClientOptions } from '@microsoft/sp-http';

export default class IdentityClient {
  //looks like the action for org in controller is without settings for cors
  //as 'Access-Control-Allow-Origin: *'
    public static async getOrg(httpClient: HttpClient) : Promise<string> {
        const url = "https://identity.mesh-dev.ucl.ac.uk/organisation/v0.2/org";
        const config: IHttpClientOptions = {
            headers: [
                ['Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IlhSdmtvOFA3QTNVYVdTblU3Yk05blQwTWpoQSJ9.eyJhdWQiOiIyOThjMzlkNS05YmY1LTRkODYtOWM4OS1kNjNiNGM3Mjc0YmMiLCJpc3MiOiJodHRwczovL2xvZ2luLm1pY3Jvc29mdG9ubGluZS5jb20vMWZhZjg4ZmUtYTk5OC00YzViLTkzYzktMjEwYTExZDlhNWMyL3YyLjAiLCJpYXQiOjE3MDk3Mjg4MjEsIm5iZiI6MTcwOTcyODgyMSwiZXhwIjoxNzA5NzMyNzIxLCJhaW8iOiJFMk5nWUdpN0Z6UHh2bWFPYU91bmhCMXRoVGU0VC9CbXUzeFplVjgzcFBsaGU5cWRHWHNBIiwiYXpwIjoiODliZGQ0MTYtNGU3My00YzhkLWIyMDUtNzljMDVmZjJiOTdlIiwiYXpwYWNyIjoiMSIsIm9pZCI6ImJlZTQzMGU1LTRmYzAtNDYwMC05OGMyLWY1N2UxZTQzY2VjNyIsInJoIjoiMC5BUVVBX29pdkg1aXBXMHlUeVNFS0VkbWx3dFU1akNuMW00Wk5uSW5XTzB4eWRMd0ZBQUEuIiwicm9sZXMiOlsiSW50ZXJuYWwuUmVhZCIsIkNvbmZpZGVudGlhbC5SZWFkIl0sInN1YiI6ImJlZTQzMGU1LTRmYzAtNDYwMC05OGMyLWY1N2UxZTQzY2VjNyIsInRpZCI6IjFmYWY4OGZlLWE5OTgtNGM1Yi05M2M5LTIxMGExMWQ5YTVjMiIsInV0aSI6InBkUEZVVzhQM2txcDRsVjYyVzBWQVEiLCJ2ZXIiOiIyLjAifQ.nQ6mhLmDKFaIL03qYpvmU0uQ6eJFwPE7gGtg9ZKwC5OsQVp7-zx2VoJqRj-kQszSnmfWU5VMhnOSdwmkvwCdgio6rbRCJqjg3cuIYWIgjxcTwCHepRA64wfHIiLONe0yvxLXaLxYLSTb-IrSMwjkzfekhF4razhuiOEHLnK1YlR3lN0tbS2VWRe2QaYqagjZ3iwCTDnrY6zkmlT_Y_rrv2gVQwK4sLQSD1IbgvG45fo7rI2g-5b8n6aUmYIgqzx6X9aDfCZt4XhERrQDGqTI8qAssAvSOhyA3DU49gbxU2lph7hZirvJwJkePq6-_ve0IoS2MEIFIasjAM8nqODmVA']
              ],
              mode: "cors"
        };

        const response = await httpClient.get (
          url, 
          HttpClient.configurations.v1, 
          config
        );

        if (!response.ok) {
          const responseText = await response.text();
          
          console.log("API FALED");
          throw new Error(responseText);
        }

        console.log("API OK");
    
        const respJson = await response.json();
        return respJson;
    }
}