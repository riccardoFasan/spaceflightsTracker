import { EventType } from '../../../enums';
import { CardBadge } from '../../common';

interface Props {
  type: EventType;
}

export const EventTypeBadge = ({ type }: Props) => {
  function getBadgeLabel(): string {
    if (type === EventType.Docking) return 'Docking';
    if (type === EventType.EVA) return 'EVA';
    if (type === EventType.StaticFire) return 'Static Fire';
    if (type === EventType.SpacecraftEvent) return 'Spacecraft Event';
    if (type === EventType.MoonLanding) return 'Moon Landing';
    if (type === EventType.AbortTest) return 'Abort Test';
    if (type === EventType.SpacecraftCapture) return 'Spacecraft Capture';
    if (type === EventType.TestFlight) return 'Test Flight';
    if (type === EventType.CelestialEvent) return 'Celestial Event';
    return 'Unknown';
  }

  return <CardBadge text={getBadgeLabel()} />;
};
