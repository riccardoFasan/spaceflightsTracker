import { Article } from '../../../models';
import {
  getArticlesBatch,
  invalidateArticleListCache,
} from '../../../services';
import { ScrollableList } from '../../common';
import { ArticleCard } from './ArticleCard';

const MAX_BATCHES: number = 10;
const BATCH_SIZE: number = 15;

export const ArticlesList = () => {
  return (
    <ScrollableList
      idKey="id"
      batchSize={BATCH_SIZE}
      maxBatches={MAX_BATCHES}
      getCard={(item: Article) => <ArticleCard article={item} />}
      invalidateCache={invalidateArticleListCache}
      getBatch={getArticlesBatch}
    />
  );
};
