import { Company } from ".";

export interface Launcher {
  id: string;
  name: string;
  variant?: string;
  fullName?: string;
  description: string;
  company?: Company;
}
