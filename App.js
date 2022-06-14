import {
  StyleSheet,
  SafeAreaView,
  View,
  Platform,
  Dimensions,
  Text,
  StatusBar,
} from "react-native";

export default function App() {
  console.log("APP EXECUTED");
  const img_uri =
    "https://images.unsplash.com/photo-1534270804882-6b5048b1c1fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&w=1000&q=80";
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.layout}>
        <Text>dasd</Text>
      </View>
    </SafeAreaView>
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
