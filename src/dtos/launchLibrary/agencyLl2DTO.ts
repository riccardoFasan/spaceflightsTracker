import { AgencyTypeLl2 } from '.';

export interface AgencyLl2DTO {
  id: string;
  url: string;
  name: string;
  featured?: boolean;
  type?: AgencyTypeLl2;
  country_code?: string;
  abbrev?: string;
  description?: string;
  administrator?: string;
  founding_year?: string;
  launchers?: string; // pipe separated names
  spacecraft?: string; // pipe separated names
  parent?: string;
  image_url?: string;
  logo_url?: string;
}
