import { AgencyTypeLl2 } from '.';

export interface AgencyCommonLl2DTO {
  id: string;
  url: string;
  name: string;
  featured?: boolean;
  type?: AgencyTypeLl2;
  country_code?: string;
  abbrev?: string;
  description?: string;
  administrator?: string;
  founding_year?: string;
  launchers?: string; // pipe separated names
  spacecraft?: string; // pipe separated names
  parent?: string;
  image_url?: string;
  logo_url?: string;
  launch_library_url: string;
  total_launch_count?: number;
  successful_launches?: number;
  consecutive_successful_launches?: number;
  failed_launches?: number;
  pending_launches?: number;
  successful_landings?: number;
  failed_landings?: number;
  attempted_landings?: number;
  consecutive_successful_landings?: number;
  info_url?: string;
  wiki_url?: string;
  nation_url?: string;
}
