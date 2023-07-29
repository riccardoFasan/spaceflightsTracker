import { LaunchesList, ArticlesList, LaunchPage } from "../components";
import { ScreenConfig } from "../models";

export const SCREENS: ScreenConfig[] = [
  {
    name: "Upcomings",
    component: LaunchesList,
    showNavigation: true,
  },
  {
    name: "News",
    component: ArticlesList,
    showNavigation: true,
  },
  {
    name: "Launch",
    component: LaunchPage,
    showNavigation: false,
  },
];

export function shouldShowNavigation(indexOrName: number | string): boolean {
  const screen: ScreenConfig | undefined =
    typeof indexOrName === "number"
      ? SCREENS[indexOrName]
      : SCREENS.find((screen) => screen.name === indexOrName);
  return !!screen?.showNavigation;
}
