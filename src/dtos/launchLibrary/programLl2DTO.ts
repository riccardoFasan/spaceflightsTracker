import { MissionPatchLl2DTO, AgencyMiniLl2DTO } from ".";

export interface ProgramLl2DTO {
  id: number;
  url: string;
  name: string;
  description?: string;
  agencies: AgencyMiniLl2DTO[];
  image_url?: string;
  start_date?: string; // Date
  end_date?: string; // Date
  info_url?: string;
  wiki_url?: string;
  mission_patches: MissionPatchLl2DTO[];
}
