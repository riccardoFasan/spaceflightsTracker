import React from 'react';
import { FieldModal } from '../../../common/modals';
import { OptionCheckbox, ScrollableList } from '../../../common';
import { Launch } from '../../../../models';
import { getLaunchesBatch } from '../../../../services';

const MAX_BATCHES: number = 5;
const BATCH_SIZE: number = 15;

export const LauncherSelectModal = () => {
  return (
    <FieldModal title='launcher'>
      <ScrollableList
        idKey='id'
        batchSize={BATCH_SIZE}
        maxBatches={MAX_BATCHES}
        getCard={(item: Launch) => (
          <OptionCheckbox
            label={item.name}
            checked={false}
            onChange={() => {}}
          />
        )}
        getBatch={getLaunchesBatch}
      />
    </FieldModal>
  );
};
