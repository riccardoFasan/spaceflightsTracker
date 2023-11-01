import React, { useState } from 'react';
import { FieldModal } from '../../../common/modals';
import { OptionRadio, ScrollableList } from '../../../common';
import { Pad } from '../../../../models';
import { getPadsBatch } from '../../../../services';

const BATCH_SIZE: number = 20;

interface Props {
  onChange: (company: Pad) => void;
}

export const PadSelectModal = ({ onChange }: Props) => {
  const [selected, setSelected] = useState<Pad>();

  function select(item: Pad): void {
    setSelected(item);
    onChange(item);
  }

  function isChecked(item: Pad): boolean {
    return selected?.id === item.id;
  }

  return (
    <FieldModal title='pad'>
      <ScrollableList
        idKey='id'
        batchSize={BATCH_SIZE}
        getItemComponent={(item: Pad) => (
          <OptionRadio
            id={item.id}
            label={item.name}
            checked={isChecked(item)}
            onChange={() => select(item)}
          />
        )}
        getBatch={getPadsBatch}
      />
    </FieldModal>
  );
};
