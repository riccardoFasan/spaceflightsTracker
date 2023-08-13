import {
  SpaceStationStatusLl2,
  AgencyMiniForSpaceStationLl2DTO,
  OrbitLl2DTO,
  ExpeditionForSpaceStationLl2DTO,
} from ".";

export interface SpaceStationLl2DTO {
  id: number;
  url: string;
  name: string;
  status: SpaceStationStatusLl2;
  type: {
    id: number;
    name: string;
  };
  founded: string; // Date
  deorbited?: string; // Date
  description: string;
  orbit: OrbitLl2DTO;
  owners: AgencyMiniForSpaceStationLl2DTO[];
  active_expedition: ExpeditionForSpaceStationLl2DTO;
  image_url?: string;
}
