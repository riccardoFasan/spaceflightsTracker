import { AgencyLl2DTO } from ".";

export interface SpacecraftConfigurationLl2DTO {
  id: number;
  url: string;
  name: string;
  agency: AgencyLl2DTO;
  in_use?: boolean;
  image_url?: string;
}
