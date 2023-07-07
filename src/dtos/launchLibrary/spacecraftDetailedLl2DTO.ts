import {
  SpacecraftConfigurationLl2DTO,
  SpacecraftFlightLl2DTO,
  SpacecraftStatusLl2Enum,
} from ".";

export interface SpacecraftDetailedLl2DTO {
  id: number;
  url: string;
  name: string;
  serial_number?: string;
  is_placeholder?: boolean;
  in_space: boolean;
  time_in_space: string;
  time_docked: string;
  flights_count: number;
  mission_ends_count?: number;
  status: {
    id: number;
    name: SpacecraftStatusLl2Enum;
  };
  description: string;
  spacecraft_config: SpacecraftConfigurationLl2DTO;
  flights: SpacecraftFlightLl2DTO[];
}
