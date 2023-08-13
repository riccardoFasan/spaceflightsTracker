import { SpaceEventType } from '../../../enums';
import { CardBadge } from '../../common';

interface Props {
  type: SpaceEventType;
}

export const SpaceEventBadge = ({ type }: Props) => {
  function getBadgeLabel(): string {
    if (type === SpaceEventType.Docking) return 'Docking';
    if (type === SpaceEventType.EVA) return 'EVA';
    if (type === SpaceEventType.StaticFire) return 'Static Fire';
    if (type === SpaceEventType.SpacecraftEvent) return 'Spacecraft Event';
    if (type === SpaceEventType.MoonLanding) return 'Moon Landing';
    if (type === SpaceEventType.AbortTest) return 'Abort Test';
    if (type === SpaceEventType.SpacecraftCapture) return 'Spacecraft Capture';
    if (type === SpaceEventType.TestFlight) return 'Test Flight';
    if (type === SpaceEventType.CelestialEvent) return 'Celestial Event';
    return 'Unknown';
  }

  return <CardBadge text={getBadgeLabel()} />;
};
