import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";

export default function PreviewScreen({ route, navigation }) {
  /* 2. Get the param */
  const photo = route.params;
  console.log(photo.uri);
  return (
    <View style={styles.preview}>
      <View style={styles.photo}>
        {photo.uri ? (
          <Image
            style={{
              flex: 1,
              resizeMode: "center",
            }}
            source={{ uri: photo.uri }}
          />
        ) : (
          <Text>no photo</Text>
        )}
      </View>
      <View style={styles.photoCta}>
        <View style={styles.cta}>
          <View style={styles.button}>
            <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
              <Text style={{ textAlign: "center", color: "white" }}>
                Chụp lại
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.cta}>
          <View style={styles.button}>
            <TouchableOpacity onPress={() => alert("on developing")}>
              <Text style={{ textAlign: "center", color: "white" }}>
                Trích xuất thông tin
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  preview: {
    flex: 1,
  },
  photo: {
    flex: 9,
    backgroundColor: "black",
  },
  photoCta: {
    flex: 1,
    flexDirection: "row",
  },
  cta: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#025395",
    width: 120,
    padding: 10,
    borderRadius: 10,
    minHeight: 70,
    justifyContent: "center",
    alignItems: "center",
  },
});
