import {
  LaunchStatusLl2DTO,
  ProgramLl2DTO,
  NetPrecisionLl2DTO,
  PadLl2DTO,
  RocketCommonLl2DTO,
  MissionLl2DTO,
} from ".";

export interface LaunchCommonLl2DTO {
  id: number;
  url: string;
  slug: string;
  name: string;
  status: LaunchStatusLl2DTO;
  last_updated?: string; // Date
  net?: string;
  window_end?: string; // Date
  window_start?: string; // Date
  net_precision?: NetPrecisionLl2DTO;
  probability?: number;
  weather_concerns?: string;
  holdreason?: string;
  failreason?: string;
  hashtag?: string;
  rocket: RocketCommonLl2DTO;
  mission?: MissionLl2DTO;
  pad: PadLl2DTO;
  webcast_live?: boolean;
  image?: string;
  infographic?: string;
  program?: ProgramLl2DTO;
  orbital_launch_attempt_count?: number;
  location_launch_attempt_count?: number;
  pad_launch_attempt_count?: number;
  agency_launch_attempt_count?: number;
  orbital_launch_attempt_count_year?: number;
  location_launch_attempt_count_year?: number;
  pad_launch_attempt_count_year?: number;
  agency_launch_attempt_count_year?: number;
}
