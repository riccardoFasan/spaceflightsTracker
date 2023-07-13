import { UpcomingLaunch } from '../../../models';
import { getUpcomingLaunchesBatch } from '../../../services';
import { ScrollableList } from '../../common';
import { UpcomingLaunchCard } from './UpcomingLaunchCard';

const MAX_BATCHES: number = 5;
const BATCH_SIZE: number = 15;

export const UpcomingLaunchesList = () => {
  return (
    <ScrollableList
      idKey={'id'}
      getCard={(item: UpcomingLaunch) => <UpcomingLaunchCard launch={item} />}
      getBatch={(batch: number) =>
        getUpcomingLaunchesBatch(batch, BATCH_SIZE, MAX_BATCHES)
      }
    />
  );
};
