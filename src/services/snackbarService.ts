import Snackbar from "react-native-snackbar";

export function showErrorMessage(message: string): void {
  Snackbar.show({
    text: message,
    duration: Snackbar.LENGTH_SHORT,
  });
}
