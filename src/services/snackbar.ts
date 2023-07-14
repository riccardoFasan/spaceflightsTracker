import Snackbar from "react-native-snackbar";
import { Color } from "../styles";

export function showErrorMessage(message: string): void {
  Snackbar.show({
    text: message,
    textColor: Color.Red,
    backgroundColor: Color.Anthracite,
    duration: Snackbar.LENGTH_SHORT,
  });
}
