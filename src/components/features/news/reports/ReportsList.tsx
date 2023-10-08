import React from 'react';
import { Article } from '../../../../models';
import { getReportsBatch } from '../../../../services';
import { ListPage, ScrollableList } from '../../../common';
import { NewsCard } from '../NewsCard';

const MAX_BATCHES: number = 10;
const BATCH_SIZE: number = 15;

export const ReportsList = () => {
  return (
    <ListPage>
      <ScrollableList
        idKey='id'
        batchSize={BATCH_SIZE}
        maxBatches={MAX_BATCHES}
        getItemComponent={(item: Article) => <NewsCard article={item} />}
        getBatch={getReportsBatch}
      />
    </ListPage>
  );
};
