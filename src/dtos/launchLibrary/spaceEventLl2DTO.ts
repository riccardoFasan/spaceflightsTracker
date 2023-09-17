import { AgencyCommonLl2DTO } from './agencyCommonLl2DTO';
import { SpaceEventTypeLl2 } from './SpaceEventTypeLl2';
import { LaunchCommonLl2DTO } from './launchCommonLl2DTO';
import { ProgramLl2DTO } from './programLl2DTO';
import { SpaceStationLl2DTO } from './spaceStationLl2DTO';

export interface SpaceEventLl2DTO {
  id: number;
  url: string;
  slug: string;
  name: string;
  updates: object[];
  type: {
    id: number;
    name: SpaceEventTypeLl2;
  };
  description: string;
  webcast_live: boolean;
  location: string;
  news_url?: string;
  video_url: string;
  feature_image: string;
  date: string;
  date_precision: object;
  duration: string;
  agencies: AgencyCommonLl2DTO[];
  launches: LaunchCommonLl2DTO[];
  spacestations: SpaceStationLl2DTO[];
  program: ProgramLl2DTO;
}
