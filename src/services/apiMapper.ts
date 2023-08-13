import {
  AgencyCommonLl2DTO,
  ArticleSnDTO,
  BlogSnDTO,
  SpaceEventLl2DTO,
  LaunchCommonLl2DTO,
  LauncherConfigDetailedLl2DTO,
  LocationLl2DTO,
  MissionLl2DTO,
  PadLl2DTO,
  ReportSnDTO,
  RocketCommonLl2DTO,
} from "../dtos";
import { SpaceEventType, LaunchStatus, MissionType, Orbit } from "../enums";
import {
  Article,
  LaunchWindow,
  Location,
  Pad,
  Launch,
  LaunchDetailed,
  Mission,
  Launcher,
  Company,
  Report,
  Blog,
  SpaceEvent,
} from "../models";

export function mapLaunchLl2ToLaunch(launchLl2: LaunchCommonLl2DTO): Launch {
  return {
    id: launchLl2.id.toString(),
    name: launchLl2.name,
    image: launchLl2.image,
    status: mapLaunchStatusLl2ToStutis(launchLl2.status.id),
    window: mapLaunchWindow(launchLl2.window_start, launchLl2.window_end),
    pad: mapPadLl2ToPad(launchLl2.pad),
  };
}

export function mapLaunchLl2ToDetailedLaunch(
  launchLl2: LaunchCommonLl2DTO
): LaunchDetailed {
  return {
    id: launchLl2.id.toString(),
    name: launchLl2.name,
    image: launchLl2.image,
    status: mapLaunchStatusLl2ToStutis(launchLl2.status.id),
    mission: launchLl2.mission && mapMissionLl2ToMission(launchLl2.mission),
    launcher: mapRocketDetailedLl2ToLauncherDetailed(launchLl2.rocket),
    window: mapLaunchWindow(launchLl2.window_start, launchLl2.window_end),
    pad: mapPadLl2ToPad(launchLl2.pad),
  };
}

export function mapArticleSnToArticle(articleSn: ArticleSnDTO): Article {
  return mapNewsSnToNews(articleSn);
}

export function mapReportSnToReport(reportSn: ReportSnDTO): Report {
  return mapNewsSnToNews(reportSn);
}

export function mapBlogSnToBlog(blogSn: BlogSnDTO): Blog {
  return mapNewsSnToNews(blogSn);
}

export function mapEventLl2ToEvent(eventLl2: SpaceEventLl2DTO): SpaceEvent {
  return {
    id: eventLl2.id.toString(),
    name: eventLl2.name,
    description: eventLl2.description,
    image: eventLl2.feature_image,
    date: eventLl2.date,
    type: mapSpaceSpaceEventType(eventLl2.type.name),
    url: eventLl2.news_url,
  };
}

function mapNewsSnToNews(
  newsSn: ArticleSnDTO | ReportSnDTO | BlogSnDTO
): Article | Report | Blog {
  return {
    id: newsSn.id.toString(),
    title: newsSn.title,
    url: newsSn.url,
    image: newsSn.image_url,
    summary: newsSn.summary,
    publishedAt: newsSn.published_at,
  };
}

function mapPadLl2ToPad(pad: PadLl2DTO): Pad | undefined {
  if (!pad.name || !pad.location.timezone_name) return;
  return {
    id: pad.id.toString(),
    name: pad.name,
    location: mapLocationLl2ToLocation(pad.location),
  };
}

function mapLaunchWindow(
  start?: string,
  end?: string
): LaunchWindow | undefined {
  if (!start || !end) return;
  return { start, end };
}

function mapLocationLl2ToLocation(
  location: LocationLl2DTO
): Location | undefined {
  if (!location.name || !location.country_code) return;
  return {
    id: location.id.toString(),
    name: location.name,
    countryCode: location.country_code,
    timezone: location.timezone_name,
  };
}

function mapLaunchStatusLl2ToStutis(id: number): LaunchStatus {
  if (id === 1) return LaunchStatus.GoForLaunch;
  return LaunchStatus.ToBeDetermined;
}

function mapMissionLl2ToMission(
  missionLl2: MissionLl2DTO
): Mission | undefined {
  if (!missionLl2.description) return;
  return {
    id: missionLl2.id.toString(),
    name: missionLl2.name,
    description: missionLl2.description,
    type: mapMissionType(missionLl2.type),
    orbit: mapOrbit(missionLl2.orbit.id),
  };
}

function mapMissionType(type: string | undefined): MissionType {
  if (type === "Earth Science") return MissionType.Earth;
  if (type === "Planetary Science") return MissionType.PlanetaryScience;
  if (type === "Astrophysics") return MissionType.Astrophysics;
  if (type === "Heliophysics") return MissionType.Heliophysics;
  if (type === "Human Exploration") return MissionType.HumanExploration;
  if (type === "Robotic Exploration") return MissionType.RoboticExploration;
  if (type === "Government/Top Secret") return MissionType.Government;
  if (type === "Tourism") return MissionType.Tourism;
  if (type === "Communications") return MissionType.Communications;
  return MissionType.Unknown;
}

function mapSpaceSpaceEventType(type: string): SpaceEventType {
  if (type === "Docking") return SpaceEventType.Docking;
  if (type === "EVA") return SpaceEventType.EVA;
  if (type === "Static Fire") return SpaceEventType.StaticFire;
  if (type === "Spacecraft Event") return SpaceEventType.SpacecraftEvent;
  if (type === "Moon Landing") return SpaceEventType.MoonLanding;
  if (type === "Abort Test") return SpaceEventType.AbortTest;
  if (type === "Spacecraft Capture") return SpaceEventType.SpacecraftCapture;
  if (type === "Celestial Event") return SpaceEventType.CelestialEvent;
  if (type === "Test Flight") return SpaceEventType.TestFlight;
  return SpaceEventType.Unknown;
}

function mapOrbit(id: number): Orbit {
  if (id === 0) return Orbit.Elliptical;
  if (id === 1) return Orbit.Geostationary;
  if (id === 2) return Orbit.GeostationaryTransfer;
  if (id === 3) return Orbit.Geosynchronous;
  if (id === 4) return Orbit.GeosynchronousTransfer;
  if (id === 5) return Orbit.HeliocentricL1;
  if (id === 6) return Orbit.HeliocentricNA;
  if (id === 7) return Orbit.HighEarth;
  if (id === 8) return Orbit.LowEarth;
  if (id === 9) return Orbit.Lunarflyby;
  if (id === 10) return Orbit.LunarImpactor;
  if (id === 11) return Orbit.Lunar;
  if (id === 12) return Orbit.MediumEarth;
  if (id === 13) return Orbit.Polar;
  if (id === 14) return Orbit.SolarEscapeTrajectory;
  if (id === 15) return Orbit.Suborbital;
  if (id === 16) return Orbit.SunEarthL2;
  if (id === 17) return Orbit.SunSynchronous;
  if (id === 18) return Orbit.SupersynchronousTransfer;
  if (id === 19) return Orbit.Mars;
  if (id === 20) return Orbit.Venus;
  if (id === 21) return Orbit.Asteroid;
  if (id === 22) return Orbit.VenusFlyby;
  if (id === 23) return Orbit.MarsFlyby;
  if (id === 24) return Orbit.MercuryFlyby;
  return Orbit.Unknown;
}

function mapRocketDetailedLl2ToLauncherDetailed(
  rocketLl2: RocketCommonLl2DTO
): Launcher | undefined {
  const config: LauncherConfigDetailedLl2DTO =
    rocketLl2.configuration as LauncherConfigDetailedLl2DTO;
  if (!config.description) return;
  return {
    id: rocketLl2.id.toString(),
    name: rocketLl2.configuration.name,
    fullName: config.full_name,
    variant: config.variant,
    description: config.description,
    company: mapAgencyLl2ToCompany(config.manufacturer),
  };
}

function mapAgencyLl2ToCompany(
  agencyLl2: AgencyCommonLl2DTO
): Company | undefined {
  if (!agencyLl2.description) return;
  return {
    id: agencyLl2.id.toString(),
    name: agencyLl2.name,
    description: agencyLl2.description,
    webSite: agencyLl2.info_url,
  };
}
