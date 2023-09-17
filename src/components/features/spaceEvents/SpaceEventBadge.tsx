import { useMemo } from 'react';
import { SpaceEventType } from '../../../enums';
import { SpaceEvent } from '../../../models';
import { CardBadge } from '../../common';

interface Props {
  event: SpaceEvent;
}

export const SpaceEventBadge = ({ event }: Props) => {
  const inlineBadge: boolean = useMemo(() => !!event.image, [event]);

  const badgeLabel: string = useMemo(() => {
    if (event.type === SpaceEventType.Docking) {
      return 'Docking';
    }
    if (event.type === SpaceEventType.EVA) {
      return 'EVA';
    }
    if (event.type === SpaceEventType.StaticFire) {
      return 'Static Fire';
    }
    if (event.type === SpaceEventType.SpacecraftEvent) {
      return 'Spacecraft Event';
    }
    if (event.type === SpaceEventType.MoonLanding) {
      return 'Moon Landing';
    }
    if (event.type === SpaceEventType.AbortTest) {
      return 'Abort Test';
    }
    if (event.type === SpaceEventType.SpacecraftCapture) {
      return 'Spacecraft Capture';
    }
    if (event.type === SpaceEventType.TestFlight) {
      return 'Test Flight';
    }
    if (event.type === SpaceEventType.CelestialEvent) {
      return 'Celestial Event';
    }
    return 'Unknown';
  }, [event]);

  return <CardBadge inline={inlineBadge} text={badgeLabel} />;
};
