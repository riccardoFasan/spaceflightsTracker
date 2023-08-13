import React from "react";

export interface ScreenConfig {
  name: string;
  component: React.FC<any>;
}

export interface RootScreenConfig extends ScreenConfig {
  showNavigation: boolean;
}
