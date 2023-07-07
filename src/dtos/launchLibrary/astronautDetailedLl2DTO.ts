import {
  AstronautStatusLl2,
  AgencyMiniLl2DTO,
  AstronautTypeLl2Enum,
  LaunchCommonLl2DTO,
  SpacecraftFlightLl2DTO,
  SpacewalkCommonLl2DTO,
} from ".";

export interface AstronautDetailedLl2DTO {
  id: number;
  url: string;
  name: string;
  status: {
    id: number;
    name: AstronautStatusLl2;
  };
  agency: AgencyMiniLl2DTO;
  profile_image?: string;
  profile_image_thumbnail?: string;
  type: {
    id: number;
    name: AstronautTypeLl2Enum;
  };
  in_space?: boolean;
  time_in_space: string;
  eva_time: string;
  age?: number;
  date_of_birth?: string; // Date
  date_of_death?: string; // Date
  nationality: string;
  twitter?: string;
  instagram?: string;
  bio: string;
  wiki?: string;
  flights: LaunchCommonLl2DTO[];
  landings: SpacecraftFlightLl2DTO[];
  flights_count?: number;
  landings_count?: number;
  spacewalks_count?: number;
  last_flight?: string; // Date
  first_flight?: string; // Date
  spacewalks: SpacewalkCommonLl2DTO[];
}
