import {
  MissionPatchLl2DTO,
  SpaceStationCommonForExpeditionLl2DTO,
  SpacewalkLl2DTO,
} from ".";

export interface ExpeditionLl2DTO {
  id: number;
  url: string;
  name: string;
  start: string;
  end?: string;
  spacestation: SpaceStationCommonForExpeditionLl2DTO;
  mission_patches: MissionPatchLl2DTO[];
  spacewalks: SpacewalkLl2DTO[];
}
