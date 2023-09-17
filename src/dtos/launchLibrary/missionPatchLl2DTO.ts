import { AgencyMiniLl2DTO } from '.';
export interface MissionPatchLl2DTO {
  id: number;
  name: string;
  priority: string;
  image_url: string;
  agency: AgencyMiniLl2DTO;
}
