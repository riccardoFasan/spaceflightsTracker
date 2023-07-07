import {
  AstronautFlightLl2DTO,
  MissionPatchLl2DTO,
  SpaceStationCommonForExpeditionLl2DTO,
  SpacewalkCommonLl2DTO,
} from ".";

export interface ExpeditionDetailedLl2DTO {
  id: number;
  url: string;
  name: string;
  start: string;
  end?: string;
  crew: AstronautFlightLl2DTO[];
  spacestation: SpaceStationCommonForExpeditionLl2DTO;
  mission_patches: MissionPatchLl2DTO[];
  spacewalks: SpacewalkCommonLl2DTO[];
}
