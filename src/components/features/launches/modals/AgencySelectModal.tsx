import React from 'react';
import { FieldModal } from '../../../common/modals';
import { OptionRadio, ScrollableList } from '../../../common';
import { Company } from '../../../../models';
import { getCompaniesBatch } from '../../../../services';

const BATCH_SIZE: number = 20;

export const AgencySelectModal = () => {
  return (
    <FieldModal title='agency'>
      <ScrollableList
        idKey='id'
        batchSize={BATCH_SIZE}
        getItemComponent={(item: Company) => (
          <OptionRadio
            id={item.id}
            label={item.name}
            checked={false}
            onChange={() => {}}
          />
        )}
        getBatch={getCompaniesBatch}
      />
    </FieldModal>
  );
};
