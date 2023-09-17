import { SpaceEventType } from '../enums';

export interface SpaceEvent {
  id: string;
  name: string;
  description: string;
  image: string;
  date: string;
  type: SpaceEventType;
  url?: string;
}
