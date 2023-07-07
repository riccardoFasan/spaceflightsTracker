import {
  SpaceStationStatusLl2Enum,
  AgencyMiniForSpaceStationLl2DTO,
  OrbitLl2DTO,
  ExpeditionForSpaceStationLl2DTO,
} from ".";

export interface SpaceStationDetailedLl2DTO {
  id: number;
  url: string;
  name: string;
  status: {
    id: number;
    name: SpaceStationStatusLl2Enum;
  };
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
  height: number; //	 m
  width: number; //	 m
  mass: number; //	 T
  volume: number; // m^3
  onboard_crew: number;
  docked_vehicles: number;
}
