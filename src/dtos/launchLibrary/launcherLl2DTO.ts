import { LauncherConfigLl2DTO, LauncherStatusLl2DTO } from ".";

export interface LauncherLl2DTO {
  id: number;
  url: string;
  flight_proven?: boolean;
  serial_number?: string;
  is_placeholder?: boolean;
  status?: LauncherStatusLl2DTO;
  details: string;
  launcher_config: LauncherConfigLl2DTO;
  image_url?: string;
  flights?: number;
  last_launch_date?: string;
  first_launch_date?: string;
}
