import React from 'react';
import { FieldModal } from '../../../common/modals';
import { OptionRadio, ScrollableList } from '../../../common';
import { Pad } from '../../../../models';
import { getPadsBatch } from '../../../../services';

const BATCH_SIZE: number = 20;

export const PadSelectModal = () => {
  return (
    <FieldModal title='pad'>
      <ScrollableList
        idKey='id'
        batchSize={BATCH_SIZE}
        getItemComponent={(item: Pad) => (
          <OptionRadio label={item.name} checked={false} onChange={() => {}} />
        )}
        getBatch={getPadsBatch}
      />
    </FieldModal>
  );
};
