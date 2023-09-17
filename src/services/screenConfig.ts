import {
  ArticlesList,
  LaunchPage,
  LaunchesPage,
  NewsPage,
  BlogsList,
  ReportsList,
  SearchLaunchesModal,
  SearchLaunchesButton,
} from '../components';
import { ScreenConfig, TabScreenConfig } from '../models';

export const TAB_SCREENS: TabScreenConfig[] = [
  {
    name: 'Launches',
    component: LaunchesPage,
    showNavigation: true,
    hasChildren: false,
    action: SearchLaunchesButton,
  },
  {
    name: 'News',
    component: NewsPage,
    showNavigation: true,
    hasChildren: true,
  },
  {
    name: 'Launch',
    component: LaunchPage,
    showNavigation: false,
    hasChildren: false,
  },
];

export const NEWS_SCREENS: ScreenConfig[] = [
  {
    name: 'Articles',
    component: ArticlesList,
  },
  {
    name: 'Blogs',
    component: BlogsList,
  },
  {
    name: 'ISS reports',
    component: ReportsList,
  },
];

export const MODAL_SCREENS: ScreenConfig[] = [
  {
    name: 'Search launches',
    component: SearchLaunchesModal,
  },
];

export function shouldShowNavigation(indexOrName: number | string): boolean {
  const screen: TabScreenConfig | undefined = findScreen(indexOrName);
  return !!screen?.showNavigation;
}

export function hasChildren(indexOrName: number | string): boolean {
  const screen: TabScreenConfig | undefined = findScreen(indexOrName);
  return !!screen?.hasChildren;
}

export function getRouteAction(
  indexOrName: number | string,
): React.FC<any> | undefined {
  const screen: TabScreenConfig | undefined = findScreen(indexOrName);
  return screen?.action;
}

function findScreen(indexOrName: number | string): TabScreenConfig | undefined {
  return typeof indexOrName === 'number'
    ? TAB_SCREENS[indexOrName]
    : TAB_SCREENS.find((screen) => screen.name === indexOrName);
}
