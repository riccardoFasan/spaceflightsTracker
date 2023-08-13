import { MissionTypeLl2Enum, OrbitLl2DTO } from ".";

export interface MissionLl2DTO {
  id: number;
  name: string;
  description?: string;
  launch_designator?: string;
  type?: MissionTypeLl2Enum;
  orbit: OrbitLl2DTO;
}
