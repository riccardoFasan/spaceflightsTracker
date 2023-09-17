import { LocationLl2DTO } from '.';

export interface PadLl2DTO {
  id: number;
  url: string;
  agency_id?: string;
  name?: string;
  info_url?: string;
  wiki_url?: string;
  map_url?: string;
  latitude?: number;
  longitude?: number;
  location: LocationLl2DTO;
  country_code?: string;
  map_image?: string;
  total_launch_count?: number;
  orbital_launch_attempt_count?: number;
}
