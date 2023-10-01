import React from 'react';
import { Article } from '../../../../models';
import { getArticlesBatch } from '../../../../services';
import { ScrollableList } from '../../../common';
import { NewsCard } from '../NewsCard';

const MAX_BATCHES: number = 10;
const BATCH_SIZE: number = 15;

export const ArticlesList = () => {
  return (
    <ScrollableList
      idKey='id'
      batchSize={BATCH_SIZE}
      maxBatches={MAX_BATCHES}
      getCard={(item: Article) => <NewsCard article={item} />}
      getBatch={getArticlesBatch}
    />
  );
};