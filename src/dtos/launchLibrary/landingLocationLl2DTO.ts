import { LocationLl2DTO } from ".";

export interface LandingLocaltionLl2DTO {
  id: number;
  name?: string;
  abbrev?: string;
  description?: string;
  location: LocationLl2DTO;
  successful_landings: number;
}
