import { EventType } from "../enums";

export interface SpaceEvent {
  id: string;
  name: string;
  description: string;
  image: string;
  date: string;
  type: EventType;
  url: string;
}
