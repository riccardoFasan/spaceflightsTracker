import React from 'react';
import { Article } from '../../../../models';
import { getBlogsBatch } from '../../../../services';
import { ListPage, ScrollableList } from '../../../common';
import { NewsCard } from '../NewsCard';

const MAX_BATCHES: number = 10;
const BATCH_SIZE: number = 15;

export const BlogsList = () => {
  return (
    <ListPage>
      <ScrollableList
        idKey='id'
        batchSize={BATCH_SIZE}
        maxBatches={MAX_BATCHES}
        getItemComponent={(item: Article) => <NewsCard article={item} />}
        getBatch={getBlogsBatch}
        refreshable={true}
      />
    </ListPage>
  );
};
