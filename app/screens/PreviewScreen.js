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
              aspectRatio: 1,
            }}
            source={{ uri: photo.uri }}
          />
        ) : (
          <Text>no photo</Text>
        )}
      </View>
      <View style={styles.photoCta}>
        <View style={styles.cta}>
          <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
            <Text style={{ textAlign: "center" }}>Chụp lại</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.cta}>
          <TouchableOpacity onPress={() => alert("on developing")}>
            <Text style={{ textAlign: "center" }}>Trích xuất thông tin</Text>
          </TouchableOpacity>
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
    backgroundColor: "#ccc",
  },
  photoCta: {
    flex: 1,
    flexDirection: "row",
  },
  cta: {
    flex: 1,
    justifyContent: "center",
  },
});
