import React, { useState } from 'react';
import { BottomModal } from './BottomModal';
import { Text } from 'react-native';
import { OptionPill } from '../OptionPill';

interface Props {
  title: string;
}

export const FieldModal = ({ title }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function open(): void {
    setIsOpen(true);
  }

  function close(): void {
    setIsOpen(false);
  }

  return (
    <>
      <OptionPill onPress={open} label={title} />
      <BottomModal isOpen={isOpen} close={close} title={title}>
        <Text>{title} content</Text>
      </BottomModal>
    </>
  );
};
