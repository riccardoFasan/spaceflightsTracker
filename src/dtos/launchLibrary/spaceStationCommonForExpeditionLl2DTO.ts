import { SpaceStationStatusLl2Enum, OrbitLl2DTO } from ".";

export interface SpaceStationCommonForExpeditionLl2DTO {
  id: number;
  url: string;
  name: string;
  status: {
    id: number;
    name: SpaceStationStatusLl2Enum;
  };
  orbit: OrbitLl2DTO;
  image_url: string;
}
