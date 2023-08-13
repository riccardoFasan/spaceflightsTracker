import {
  LaunchesList,
  ArticlesList,
  LaunchPage,
  UpcomingsPage,
  NewsPage,
} from "../components";
import { ScreenConfig, RootScreenConfig } from "../models";

export const ROOT_SCREENS: RootScreenConfig[] = [
  {
    name: "Upcomings",
    component: UpcomingsPage,
    showNavigation: true,
  },
  {
    name: "News",
    component: NewsPage,
    showNavigation: true,
  },
  {
    name: "Launch",
    component: LaunchPage,
    showNavigation: false,
  },
];

export const LAUNCH_SCREENS: ScreenConfig[] = [
  {
    name: "Launches",
    component: LaunchesList,
  },
  {
    name: "events",
    component: LaunchesList,
  },
  {
    name: "tests",
    component: LaunchesList,
  },
];

export const NEWS_SCREENS: ScreenConfig[] = [
  {
    name: "Articles",
    component: ArticlesList,
  },
];

export function shouldShowNavigation(indexOrName: number | string): boolean {
  const screen: RootScreenConfig | undefined =
    typeof indexOrName === "number"
      ? ROOT_SCREENS[indexOrName]
      : ROOT_SCREENS.find((screen) => screen.name === indexOrName);
  return !!screen?.showNavigation;
}
