import React from 'react';
import { FieldModal } from '../../../common/modals';
import { OptionCheckbox, ScrollableList } from '../../../common';
import { getLaunchStatusesBatch } from '../../../../services';
import { LaunchStatusDetailed } from '../../../../models';

const BATCH_SIZE: number = 20;

export const LaunchStatusSelectModal = () => {
  return (
    <FieldModal title='status'>
      <ScrollableList
        idKey='id'
        batchSize={BATCH_SIZE}
        getItemComponent={(item: LaunchStatusDetailed) => (
          <OptionCheckbox
            id={item.id}
            label={item.name}
            checked={false}
            onChange={() => {}}
          />
        )}
        getBatch={getLaunchStatusesBatch}
      />
    </FieldModal>
  );
};
