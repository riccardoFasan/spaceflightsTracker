import Snackbar from 'react-native-snackbar';
import { Color } from '../styles';

export function showErrorMessage(message: string): void {
  Snackbar.show({
    text: message,
    textColor: Color.Red,
    backgroundColor: Color.Anthracite,
    duration: Snackbar.LENGTH_SHORT,
  });
}

export function showNotificationMessage(date: Date): void {
  Snackbar.show({
    text: `Notification scheduled for ${date.toLocaleString()}`,
    textColor: Color.White,
    backgroundColor: Color.Anthracite,
    duration: Snackbar.LENGTH_SHORT,
  });
}
