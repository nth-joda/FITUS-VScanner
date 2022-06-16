import { StyleSheet, Platform, StatusBar } from "react-native";
import MainScreen from "./app/screens/MainScreen";
import TakePhotoScreen from "./app/screens/TakePhotoScreen";

export default function App() {
  console.log("APP EXECUTED");

  return <TakePhotoScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  layout: {
    backgroundColor: "dodgerblue",
    width: "100%",
    height: "30%",
  },
});
