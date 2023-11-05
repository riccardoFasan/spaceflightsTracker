import React, { useState } from 'react';
import { ScrollView, StyleSheet, TextInput, View } from 'react-native';
import {
  Color,
  FontSize,
  FontWeight,
  Spacing,
  flexBoxStyles,
} from '../../styles';
import { BackButton, SearchableList } from '../common';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  AgencySelectModal,
  LaunchStatusSelectModal,
  StartWindowDateModal,
  PadSelectModal,
} from '../features/launches/modals';
import { Company, Launch, LaunchStatusDetailed, Pad } from '../../models';
import { LaunchCard } from '../features';
import { getLaunchesBatch } from '../../services';

const BATCH_SIZE: number = 30;

export const SearchLaunchesPage = () => {
  const [filters, setFilters] = useState<object>();

  function onSearchChange(event: any): void {
    const query = event.nativeEvent.text;
    onFilterChange({ search: query || undefined });
  }

  function onAgencyChange(value: Company): void {
    onFilterChange({ lsp__id: value?.id || undefined });
  }

  function onLaunchStatusChange(values: LaunchStatusDetailed[]): void {
    const ids = values.map((v) => v.id);
    onFilterChange({ status__ids: ids.length ? ids : undefined });
  }

  function onStartWindowDateChange(value: Date): void {
    onFilterChange({ window_start__gte: value || undefined });
  }

  function onPadSelectChange(value: Pad): void {
    onFilterChange({ pad: value?.id || undefined });
  }

  function resetFilters(): void {
    setFilters(undefined);
  }

  function onFilterChange(filters: object): void {
    setFilters((v) => ({ ...v, ...filters }));
  }

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
            onChange={onSearchChange}
          />
        </View>
        <BackButton icon='close' callback={resetFilters} />
      </View>
      <View>
        <ScrollView horizontal={true} contentContainerStyle={styles.pills}>
          <AgencySelectModal onChange={onAgencyChange} />
          <LaunchStatusSelectModal onChange={onLaunchStatusChange} />
          <StartWindowDateModal onChange={onStartWindowDateChange} />
          <PadSelectModal onChange={onPadSelectChange} />
        </ScrollView>
        <SearchableList
          idKey='id'
          batchSize={BATCH_SIZE}
          getItemComponent={(item: Launch) => (
            <LaunchCard launch={item} minimal={true} />
          )}
          getBatch={getLaunchesBatch}
          filters={filters}
        />
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
