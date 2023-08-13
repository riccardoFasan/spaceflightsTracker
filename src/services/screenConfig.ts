import {
  LaunchesList,
  ArticlesList,
  LaunchPage,
  UpcomingsPage,
  NewsPage,
  TestsList,
  EventsList,
} from "../components";
import { BlogsList } from "../components/features/blogs";
import { ReportsList } from "../components/features/reports";
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
    component: EventsList,
  },
  {
    name: "tests",
    component: TestsList,
  },
];

export const NEWS_SCREENS: ScreenConfig[] = [
  {
    name: "Articles",
    component: ArticlesList,
  },
  {
    name: "Blogs",
    component: BlogsList,
  },
  {
    name: "ISS reports",
    component: ReportsList,
  },
];

export function shouldShowNavigation(indexOrName: number | string): boolean {
  const screen: RootScreenConfig | undefined =
    typeof indexOrName === "number"
      ? ROOT_SCREENS[indexOrName]
      : ROOT_SCREENS.find((screen) => screen.name === indexOrName);
  return !!screen?.showNavigation;
}
