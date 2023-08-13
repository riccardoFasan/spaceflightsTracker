import { MissionTypeLl2, OrbitLl2DTO } from ".";

export interface MissionLl2DTO {
  id: number;
  name: string;
  description?: string;
  launch_designator?: string;
  type?: MissionTypeLl2;
  orbit: OrbitLl2DTO;
}
