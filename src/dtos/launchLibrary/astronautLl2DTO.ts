import { AstronautStatusLl2, AgencyMiniLl2DTO } from ".";

export interface AstronautLl2DTO {
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
}
