import React from "react";

export interface ScreenConfig {
  name: string;
  component: React.FC<any>;
  showNavigation: boolean;
}
