import { Article } from '../../../models';
import { getArticlesBatch } from '../../../services';
import { ScrollableList } from '../../common';
import { BlogCard } from './BlogCard';

const MAX_BATCHES: number = 10;
const BATCH_SIZE: number = 15;

export const BlogsList = () => {
  return (
    <ScrollableList
      idKey="id"
      batchSize={BATCH_SIZE}
      maxBatches={MAX_BATCHES}
      getCard={(item: Article) => <BlogCard article={item} />}
      getBatch={getArticlesBatch}
    />
  );
};
