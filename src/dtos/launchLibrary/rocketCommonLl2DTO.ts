export interface RocketCommonLl2DTO {
  id: number;
  configuration: {
    id: number;
    url: string;
    name: string;
    family?: string;
    full_name?: string;
    variant?: string;
  };
}
