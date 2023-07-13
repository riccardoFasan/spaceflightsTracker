import { Article } from '../../../models';
import { getArticlesBatch } from '../../../services';
import { ScrollableList } from '../../common';
import { ArticleCard } from './ArticleCard';

const MAX_BATCHES: number = 10;
const BATCH_SIZE: number = 15;

export const ArticlesList = () => {
  return (
    <ScrollableList
      idKey={'id'}
      getCard={(item: Article) => <ArticleCard article={item} />}
      getBatch={(batch: number) =>
        getArticlesBatch(batch, BATCH_SIZE, MAX_BATCHES)
      }
    />
  );
};