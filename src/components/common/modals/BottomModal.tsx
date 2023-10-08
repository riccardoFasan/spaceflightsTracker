import React, { ReactNode } from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import {
  Color,
  FontSize,
  FontWeight,
  Spacing,
  flexBoxStyles,
} from '../../../styles';
import { IconButton } from '../buttons/IconButton';

interface Props {
  title: string;
  isOpen: boolean;
  close: () => void;
  children: ReactNode;
}

export const BottomModal = ({ title, isOpen, close, children }: Props) => {
  return (
    <Modal
      animationType='fade'
      transparent={true}
      visible={isOpen}
      onDismiss={close}
      onRequestClose={close}
    >
      <Pressable style={styles.container} onPress={close}>
        <View style={styles.modal}>
          <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
            <IconButton onPress={close} icon='close' />
          </View>
          <View style={styles.content}>{children}</View>
        </View>
      </Pressable>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: Color.BlackTransparent,
    ...flexBoxStyles.columnEnd,
  },
  modal: {
    width: '100%',
    maxHeight: '75%',
    backgroundColor: Color.DarkAnthracite,
    borderTopEndRadius: Spacing.ExtraLarge,
    borderTopStartRadius: Spacing.ExtraLarge,
  },
  header: {
    paddingVertical: Spacing.ExtraLarge,
    paddingLeft: Spacing.ExtraLarge,
    paddingRight: Spacing.Large,
    borderBottomWidth: 1,
    borderColor: Color.LightAnthracite,
    ...flexBoxStyles.rowBetween,
  },
  title: {
    fontWeight: FontWeight.Bold,
    fontSize: FontSize.Large,
    textTransform: 'capitalize',
    color: Color.Gray,
  },
  content: {
    paddingBottom: Spacing.ExtraExtraLarge,
  },
});
