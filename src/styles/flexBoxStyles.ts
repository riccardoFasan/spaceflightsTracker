import { StyleSheet } from 'react-native';

export const flexBoxStyles = StyleSheet.create({
  columnCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowAround: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  rowStartCenter: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  rowCenter: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
