import {
  ArticlesList,
  LaunchPage,
  NewsPage,
  LaunchesPage,
} from "../components";
import { BlogsList } from "../components/features/blogs";
import { ReportsList } from "../components/features/reports";
import { ScreenConfig, RootScreenConfig } from "../models";

export const ROOT_SCREENS: RootScreenConfig[] = [
  {
    name: "Launches",
    component: LaunchesPage,
    showNavigation: true,
    hasChildren: false,
  },
  {
    name: "News",
    component: NewsPage,
    showNavigation: true,
    hasChildren: true,
  },
  {
    name: "Launch",
    component: LaunchPage,
    showNavigation: false,
    hasChildren: false,
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
  const screen: RootScreenConfig | undefined = findScreen(indexOrName);
  return !!screen?.showNavigation;
}

export function hasChildren(indexOrName: number | string): boolean {
  const screen: RootScreenConfig | undefined = findScreen(indexOrName);
  return !!screen?.hasChildren;
}

function findScreen(
  indexOrName: number | string,
): RootScreenConfig | undefined {
  return typeof indexOrName === "number"
    ? ROOT_SCREENS[indexOrName]
    : ROOT_SCREENS.find((screen) => screen.name === indexOrName);
}
