import React from 'react';
import { ScrollView, StyleSheet, TextInput, View } from 'react-native';
import {
  Color,
  FontSize,
  FontWeight,
  Spacing,
  flexBoxStyles,
} from '../../styles';
import { BackButton } from '../common';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  AgencySelectModal,
  LaunchStatusSelectModal,
  StartWindowDateModal,
  PadSelectModal,
} from '../features/launches/modals';

export const SearchLaunchesPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.inputContainer}>
          <Icon style={styles.searchIcon} name='magnify' />
          <TextInput
            autoFocus={true}
            style={styles.input}
            cursorColor={Color.Blue}
            placeholderTextColor={Color.Gray}
            placeholder='Search Launches'
            inputMode='search'
          />
        </View>
        <BackButton icon='close' />
      </View>
      <View>
        <ScrollView horizontal={true} contentContainerStyle={styles.pills}>
          <AgencySelectModal onChange={(agency) => {}} />
          <LaunchStatusSelectModal onChange={(statuses) => {}} />
          <StartWindowDateModal onChange={(startWindow) => {}} />
          <PadSelectModal onChange={(pad) => {}} />
        </ScrollView>
        <View style={styles.results} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: Color.Black,
  },
  header: {
    ...flexBoxStyles.rowBetween,
    paddingLeft: Spacing.ExtraLarge,
    paddingRight: Spacing.Medium,
    paddingVertical: Spacing.Medium,
    backgroundColor: Color.DarkAnthracite,
  },
  inputContainer: {
    ...flexBoxStyles.rowStart,
  },
  searchIcon: {
    color: Color.Gray,
    marginRight: Spacing.Small,
    fontSize: 28,
  },
  input: {
    color: Color.White,
    fontSize: FontSize.Large,
    fontWeight: FontWeight.Medium,
    width: '75%',
  },
  pills: {
    ...flexBoxStyles.rowStart,
    padding: Spacing.Large,
    gap: Spacing.Large,
    flexWrap: 'nowrap',
  },
  results: {
    padding: Spacing.Large,
  },
});
