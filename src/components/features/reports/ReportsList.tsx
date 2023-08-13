import { Article } from '../../../models';
import { getArticlesBatch } from '../../../services';
import { ScrollableList } from '../../common';
import { ReportCard } from './ReportCard';

const MAX_BATCHES: number = 10;
const BATCH_SIZE: number = 15;

export const ReportsList = () => {
  return (
    <ScrollableList
      idKey="id"
      batchSize={BATCH_SIZE}
      maxBatches={MAX_BATCHES}
      getCard={(item: Article) => <ReportCard article={item} />}
      getBatch={getArticlesBatch}
    />
  );
};
