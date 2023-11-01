import React, { useState } from 'react';
import { FieldModal } from '../../../common/modals';
import { OptionRadio, ScrollableList } from '../../../common';
import { Company } from '../../../../models';
import { getCompaniesBatch } from '../../../../services';

const BATCH_SIZE: number = 20;

interface Props {
  onChange: (company: Company) => void;
}

export const AgencySelectModal = ({ onChange }: Props) => {
  const [selected, setSelected] = useState<Company>();

  function select(item: Company): void {
    setSelected(item);
    onChange(item);
  }

  function isChecked(item: Company): boolean {
    return selected?.id === item.id;
  }

  return (
    <FieldModal title='agency'>
      <ScrollableList
        idKey='id'
        batchSize={BATCH_SIZE}
        getItemComponent={(item: Company) => (
          <OptionRadio
            id={item.id}
            label={item.name}
            checked={isChecked(item)}
            onChange={() => select(item)}
          />
        )}
        getBatch={getCompaniesBatch}
      />
    </FieldModal>
  );
};
