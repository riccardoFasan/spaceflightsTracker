import { AstronautCommonLl2DTO, AstronautRoleLl2DTO } from ".";

export interface AstronautFlightLl2DTO {
  id: number;
  role: AstronautRoleLl2DTO;
  astronaut: AstronautCommonLl2DTO;
}
