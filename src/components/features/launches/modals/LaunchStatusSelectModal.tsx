import React, { useState } from 'react';
import { FieldModal } from '../../../common/modals';
import { OptionCheckbox, ScrollableList } from '../../../common';
import { getLaunchStatusesBatch } from '../../../../services';
import { LaunchStatusDetailed } from '../../../../models';

const BATCH_SIZE: number = 20;

interface Props {
  onChange: (statuses: LaunchStatusDetailed[]) => void;
}

export const LaunchStatusSelectModal = ({ onChange }: Props) => {
  const [selected, setSelected] = useState<LaunchStatusDetailed[]>([]);

  function toggle(item: LaunchStatusDetailed): void {
    const hasItem = isChecked(item);
    const selectedOptions = hasItem
      ? selected.filter((i) => i.id !== item.id)
      : [...selected, item];

    setSelected(selectedOptions);
    onChange(selectedOptions);
  }

  function isChecked(item: LaunchStatusDetailed): boolean {
    return selected.some((i) => i.id === item.id);
  }

  return (
    <FieldModal title='status'>
      <ScrollableList
        idKey='id'
        batchSize={BATCH_SIZE}
        getItemComponent={(item: LaunchStatusDetailed) => (
          <OptionCheckbox
            id={item.id}
            label={item.name}
            checked={isChecked(item)}
            onChange={() => toggle(item)}
          />
        )}
        getBatch={getLaunchStatusesBatch}
      />
    </FieldModal>
  );
};
