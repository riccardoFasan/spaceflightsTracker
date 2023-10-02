import React from 'react';
import { FieldModal } from '../../../common/modals';
import { ScrollableList } from '../../../common';
import { Launch } from '../../../../models';
import { getLaunchesBatch } from '../../../../services';
import { Text } from 'react-native';

const MAX_BATCHES: number = 5;
const BATCH_SIZE: number = 15;

export const PadSelectModal = () => {
  return (
    <FieldModal title='pad'>
      <ScrollableList
        idKey='id'
        batchSize={BATCH_SIZE}
        maxBatches={MAX_BATCHES}
        getCard={(item: Launch) => <Text>{item.name}</Text>}
        getBatch={getLaunchesBatch}
      />
    </FieldModal>
  );
};
