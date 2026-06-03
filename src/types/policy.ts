export interface Destination {
  code: string;
  name: string;
}

export interface Policy {
  policyNumber: string;
  policyStart: string;
  policyEnd: string;
  primaryTravellerFirstname: string;
  primaryTravellerLastName: string;
  primaryTravellerPhoneNumber: string;
  status: string;
  alphaCode: string;
  iSO3CountryOfResidence: string;
  underwriterCode: string;
  groupCode: string;
  type: string;
  excess: number;
  maxTripDuration: number;
  planName: string;
  destinations?: Destination[];
}