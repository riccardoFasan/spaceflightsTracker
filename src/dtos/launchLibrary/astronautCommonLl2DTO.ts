import { AgencyMiniLl2DTO, AstronautStatusLl2, AstronautTypeLl2Enum } from ".";

export interface AstronautCommonLl2DTO {
  id: number;
  url: string;
  name: string;
  status: {
    id: number;
    name: AstronautStatusLl2;
  };
  agency: AgencyMiniLl2DTO;
  profile_image?: string;
  type: {
    id: number;
    name: AstronautTypeLl2Enum;
  };
  in_space?: boolean;
  time_in_space: string;
  date_of_birth?: string; // Date
  date_of_death?: string; // Date
  nationality: string;
  twitter?: string;
  instagram?: string;
  bio: string;
  wiki?: string;
  last_flight?: string; // Date
  first_flight?: string; // Date
}
