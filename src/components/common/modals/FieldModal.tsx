import React, { useState, ReactNode } from 'react';
import { BottomModal } from './BottomModal';
import { OptionPill } from '../OptionPill';

interface Props {
  title: string;
  children: ReactNode;
}

export const FieldModal = ({ title, children }: Props) => {
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
        {children}
      </BottomModal>
    </>
  );
};
