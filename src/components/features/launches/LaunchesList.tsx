import React from 'react';
import { Launch } from '../../../models';
import { getLaunchesBatch } from '../../../services';
import { ScrollableList } from '../../common';
import { LaunchCard } from './LaunchCard';

const MAX_BATCHES: number = 5;
const BATCH_SIZE: number = 15;

export const LaunchesList = () => {
  return (
    <ScrollableList
      idKey='id'
      batchSize={BATCH_SIZE}
      maxBatches={MAX_BATCHES}
      getCard={(item: Launch) => <LaunchCard launch={item} />}
      getBatch={getLaunchesBatch}
    />
  );
};
