import { LandingLl2DTO, LaunchCommonLl2DTO, SpacecraftLl2DTO } from ".";

export interface SpacecraftFlightLl2DTO {
  id: number;
  url: string;
  destination?: string;
  mission_end?: string;
  spacecraft?: SpacecraftLl2DTO;
  launch: LaunchCommonLl2DTO;
  landing: LandingLl2DTO;
}
