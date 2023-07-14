import {
  ArticleSnDTO,
  LaunchCommonLl2DTO,
  LocationLl2DTO,
  PadLl2DTO,
} from "../dtos";
import { UpcomingLaunchStatus } from "../enums";
import {
  Article,
  LaunchWindow,
  Location,
  Pad,
  UpcomingLaunch,
} from "../models";

export function mapLaunchLl2ToLaunch(
  launchLl2: LaunchCommonLl2DTO
): UpcomingLaunch {
  return {
    id: launchLl2.id.toString(),
    name: launchLl2.name,
    image: launchLl2.image,
    status: mapLaunchStatus(launchLl2.status.id),
    window: mapLaunchWindow(launchLl2.window_start, launchLl2.window_end),
    pad: mapPad(launchLl2.pad),
  };
}

export function mapArticleSnToArticle(articleSn: ArticleSnDTO): Article {
  return {
    id: articleSn.id.toString(),
    title: articleSn.title,
    url: articleSn.url,
    image: articleSn.image_url,
    summary: articleSn.summary,
    publishedAt: articleSn.published_at,
  };
}

function mapPad(pad: PadLl2DTO): Pad | undefined {
  if (!pad.name || !pad.location.timezone_name) return;
  return {
    id: pad.id.toString(),
    name: pad.name,
    location: mapLocation(pad.location),
  };
}

function mapLaunchWindow(
  start?: string,
  end?: string
): LaunchWindow | undefined {
  if (!start || !end) return;
  return { start, end };
}

function mapLocation(location: LocationLl2DTO): Location | undefined {
  if (!location.name || !location.country_code) return;
  return {
    id: location.id.toString(),
    name: location.name,
    countryCode: location.country_code,
    timezone: location.timezone_name,
  };
}

function mapLaunchStatus(statusId: number): UpcomingLaunchStatus {
  if (statusId === 1) return UpcomingLaunchStatus.GoForLaunch;
  return UpcomingLaunchStatus.ToBeDetermined;
}
