import { AgencyCommonLl2DTO, ProgramLl2DTO } from '.';

export interface LauncherConfigDetailedLl2DTO {
  id: number;
  url: string;
  name: string;
  description?: string;
  family?: string;
  full_name?: string;
  variant?: string;
  alias?: string;
  min_stage?: number;
  max_stage?: number;
  length?: number; // m
  diameter?: number; // m
  maiden_flight?: string; // Date
  launch_mass?: number; // T
  leo_capacity?: number; // Kg
  gto_capacity?: number; // Kg
  to_thrust?: number; // kN
  apogee?: number; // km
  vehicle_range?: number;
  image_url?: string;
  info_url?: string;
  wiki_url?: string;
  consecutive_successful_launches?: number;
  successful_launches?: number;
  failed_launches?: number;
  pending_launches?: number;
  manufacturer: AgencyCommonLl2DTO;
  program: ProgramLl2DTO;
  launch_cost?: string; // $
  total_launch_count?: number;
  attempted_landings?: number;
  successful_landings?: number;
  failed_landings?: number;
  consecutive_successful_landings?: number;
}
