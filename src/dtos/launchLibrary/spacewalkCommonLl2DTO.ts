import { AstronautFlightLl2DTO } from ".";

export interface SpacewalkCommonLl2DTO {
  id: number;
  url: string;
  name: string;
  start?: string; // Date
  end?: string; // Date
  duration: string;
  location?: string;
  crew: AstronautFlightLl2DTO[];
}
