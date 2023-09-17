import { Location } from './locationModel';

export interface Pad {
  id: string;
  name: string;
  location?: Location;
}
