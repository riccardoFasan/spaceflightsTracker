import React from 'react';

export interface ScreenConfig {
  name: string;
  component: React.FC<any>;
}

export interface TabScreenConfig extends ScreenConfig {
  showNavigation: boolean;
  hasChildren: boolean;
  action?: React.FC;
}
