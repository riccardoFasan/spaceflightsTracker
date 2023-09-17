import { MissionType, Orbit } from '../enums';

export interface Mission {
  id: string;
  name: string;
  description: string;
  type: MissionType;
  orbit: Orbit;
}
