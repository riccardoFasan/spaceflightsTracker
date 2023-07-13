import Snackbar from "react-native-snackbar";

export function showErrorMessage(message: string): void {
  Snackbar.show({
    text: message,
    textColor: "#E70E00",
    backgroundColor: "#212429",
    duration: Snackbar.LENGTH_SHORT,
  });
}
