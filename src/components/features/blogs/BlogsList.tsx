import { Article } from '../../../models';
import { getBlogsBatch } from '../../../services';
import { ScrollableList, NewsCard } from '../../common';

const MAX_BATCHES: number = 10;
const BATCH_SIZE: number = 15;

export const BlogsList = () => {
  return (
    <ScrollableList
      idKey="id"
      batchSize={BATCH_SIZE}
      maxBatches={MAX_BATCHES}
      getCard={(item: Article) => <NewsCard article={item} />}
      getBatch={getBlogsBatch}
    />
  );
};
