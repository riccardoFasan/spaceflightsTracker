import { AgencyLl2DTO } from ".";

export interface SpacecraftConfigurationDetailedLl2DTO {
  id: number;
  url: string;
  name: string;
  agency: AgencyLl2DTO;
  in_use?: boolean;
  capability?: string;
  history?: string;
  details?: string;
  maiden_flight?: string; // Date
  height?: number; // m
  diameter?: number; // m
  human_rated?: boolean;
  crew_capacity?: number;
  payload_capacity?: number; // kg
  flight_life?: string;
  image_url?: string;
  nation_url?: string;
  wiki_link?: string;
  info_link?: string;
}
