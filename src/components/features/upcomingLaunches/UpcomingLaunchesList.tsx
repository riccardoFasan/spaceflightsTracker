import { UpcomingLaunch } from '../../../models';
import {
  getUpcomingLaunchesBatch,
  invalidateLaunchListCache,
} from '../../../services';
import { ScrollableList } from '../../common';
import { UpcomingLaunchCard } from './UpcomingLaunchCard';

const MAX_BATCHES: number = 5;
const BATCH_SIZE: number = 15;

export const UpcomingLaunchesList = () => {
  return (
    <ScrollableList
      idKey="id"
      batchSize={BATCH_SIZE}
      maxBatches={MAX_BATCHES}
      getCard={(item: UpcomingLaunch) => <UpcomingLaunchCard launch={item} />}
      invalidateCache={invalidateLaunchListCache}
      getBatch={getUpcomingLaunchesBatch}
    />
  );
};
