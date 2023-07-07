import { LandingLocaltionLl2DTO, LandingTypeLl2DTO } from ".";

export interface LandingLl2DTO {
  id: number;
  attempt: boolean;
  success: boolean;
  description: string;
  downrange_distance: number; // km
  location: LandingLocaltionLl2DTO;
  type: LandingTypeLl2DTO;
}
