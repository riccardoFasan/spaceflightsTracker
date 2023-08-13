import { SpaceEvent } from '../../../models';
import { getEventsBatch } from '../../../services';
import { ScrollableList } from '../../common';
import { SpaceEventCard } from '.';

const MAX_BATCHES: number = 5;
const BATCH_SIZE: number = 15;

export const EventsList = () => {
  return (
    <ScrollableList
      idKey="id"
      batchSize={BATCH_SIZE}
      maxBatches={MAX_BATCHES}
      getCard={(item: SpaceEvent) => <SpaceEventCard event={item} />}
      getBatch={getEventsBatch}
    />
  );
};
