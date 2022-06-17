import { StyleSheet, Platform, StatusBar } from "react-native";
import MainScreen from "./app/screens/MainScreen";
import TakePhotoScreen from "./app/screens/TakePhotoScreen";
import LoginScreen from "./app/screens/LoginScreen";
import PreviewScreen from "./app/screens/PreviewScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={MainScreen} />
        <Stack.Screen name="Camera" component={TakePhotoScreen} />
        <Stack.Screen name="Preview" component={PreviewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
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
