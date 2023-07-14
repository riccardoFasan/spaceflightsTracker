import { StyleSheet } from "react-native";

export const flexBoxStyles = StyleSheet.create({
  columnCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  rowAround: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
